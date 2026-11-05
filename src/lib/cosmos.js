import { CosmosClient } from "@azure/cosmos";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const LOCAL_PATH = path.join(process.cwd(), "data", "enquiries.json");

function setting(name, fallback) {
  const value = process.env[name]?.trim();
  return value || fallback;
}

function cosmosSettings() {
  const endpoint = process.env.COSMOS_ENDPOINT?.trim() || "";
  const key = process.env.COSMOS_KEY?.trim() || "";

  if (endpoint || key) {
    if (!endpoint || !key) {
      throw new Error("Set both COSMOS_ENDPOINT and COSMOS_KEY.");
    }
    return {
      endpoint,
      key,
      databaseId: setting("COSMOS_DATABASE", "tinitiate"),
      containerId: setting("COSMOS_CONTAINER", "items"),
    };
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("COSMOS_ENDPOINT and COSMOS_KEY are required when NODE_ENV is production.");
  }

  return null;
}

let containerPromise;

async function openContainer({ endpoint, key, databaseId, containerId }) {
  const client = new CosmosClient({ endpoint, key });
  return client.database(databaseId).container(containerId);
}

async function getContainer() {
  const settings = cosmosSettings();
  if (!settings) return null;

  if (!containerPromise) {
    containerPromise = openContainer(settings).catch((err) => {
      containerPromise = null;
      throw err;
    });
  }

  return containerPromise;
}

function enquiryFrom(input) {
  const name = String(input?.name || "").trim();
  const email = String(input?.email || "").trim();
  const phone = String(input?.phone || "").trim();
  const preferredTime = String(input?.preferredTime || "").trim();

  if (!name || !email || !phone || !preferredTime) {
    const error = new Error("Name, email, phone, and preferred time are required.");
    error.statusCode = 400;
    throw error;
  }

  return {
    id: randomUUID(),
    pk: "enquiry",
    type: "enquiry",
    name,
    email,
    phone,
    course: String(input?.course || "").trim(),
    preferredTime,
    message: String(input?.message || "").trim(),
    createdAt: new Date().toISOString(),
  };
}

async function saveLocal(doc) {
  await mkdir(path.dirname(LOCAL_PATH), { recursive: true });
  let items = [];
  try {
    const parsed = JSON.parse(await readFile(LOCAL_PATH, "utf8"));
    if (Array.isArray(parsed?.items)) items = parsed.items;
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }
  items.push(doc);
  await writeFile(LOCAL_PATH, JSON.stringify({ items }, null, 2));
}

export async function saveEnquiry(input) {
  const doc = enquiryFrom(input);
  const container = await getContainer();

  if (!container) {
    await saveLocal(doc);
    return doc;
  }

  await container.items.create(doc);
  return doc;
}
