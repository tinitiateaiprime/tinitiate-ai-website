import { NextResponse } from "next/server";
import { saveEnquiry } from "@lib/cosmos";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const saved = await saveEnquiry(body);
    return NextResponse.json({ ok: true, id: saved.id });
  } catch (e) {
    const status = e.statusCode && e.statusCode >= 400 && e.statusCode < 500 ? e.statusCode : 500;
    return NextResponse.json({ ok: false, error: e.message }, { status });
  }
}
