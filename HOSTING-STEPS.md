# Host TINITIATE on Azure — short steps

TINITIATE runs as one Node.js site on Azure App Service. Callback requests are stored in Cosmos DB. Chat uses OpenAI. A push to `main` builds the site and publishes it.

Portal clicks, command-line commands, and failure notes are in [HOSTING.md](HOSTING.md).

## What you create

| Piece | Choice |
| --- | --- |
| Web app | App Service, Linux, **Basic B1**, Node 24 LTS, startup command `node node_modules/next/dist/bin/next start` |
| Database | Cosmos DB for NoSQL, database `tinitiate`, container `items`, partition key `/pk`, 400 RU/s |
| Release | GitHub Actions: **Build** then **Deploy**, signed in with OpenID Connect |

One subscription can have only one free-tier Cosmos account. If TeamMate already uses that discount, create this account without the free-tier discount. The 400 RU/s database is then billed.

## 1. Confirm the app locally

```powershell
cd C:\Chandra\TInitiateWork1\TalentSite\CourseSite2\tinitiate-ai-website
npm install
npm run build
npm start
```

Open http://localhost:3000. Run `npm run build` before `npm start`. Copy `.env.example` to `.env.local` for local keys. Do not commit that file.

## 2. Create the Azure resources

In [the Azure portal](https://portal.azure.com), use one new resource group, such as `tinitiate-rg`, in **Central India**.

1. Create a Linux web app on plan **Basic B1** with runtime **Node 24 LTS**. Turn on **HTTPS Only** and **Always on**. Set the startup command to `node node_modules/next/dist/bin/next start`.
2. Create **Azure Cosmos DB for NoSQL**. Add database `tinitiate` and container `items` with partition key `/pk` at **400** RU/s.
3. On the web app, add these settings:

| Name | Value |
| --- | --- |
| `COSMOS_ENDPOINT` | Cosmos URI |
| `COSMOS_KEY` | Cosmos primary key |
| `COSMOS_DATABASE` | `tinitiate` |
| `COSMOS_CONTAINER` | `items` |
| `OPENAI_API_KEY` | Your OpenAI key |
| `OPENAI_MODEL` | `gpt-4o-mini` |
| `OPENAI_EMBED_MODEL` | `text-embedding-3-small` |
| `RAG_ORIGIN` | `https://tinitiate.com` |
| `RAG_INDEX_PATH` | `/home/data/tinitiate-rag.json` |
| `NODE_ENV` | `production` |
| `SCM_DO_BUILD_DURING_DEPLOYMENT` | `false` |

## 3. Let GitHub publish

1. Create a managed identity named `tinitiate-github` in `tinitiate-rg`.
2. Add a federated credential for GitHub Actions, environment `production`, repository `tinitiateprime/tinitiate-ai-website`.
3. Assign **Contributor** on `tinitiate-rg` and **Reader** on the subscription. **Add role assignment** stays disabled until the signed-in account is **Owner** or **User Access Administrator**. The clicks are in [HOSTING.md](HOSTING.md).
4. In the GitHub repository, under **Settings** > **Secrets and variables** > **Actions**, save:

| Kind | Name |
| --- | --- |
| Secret | `AZURE_CLIENT_ID` |
| Secret | `AZURE_TENANT_ID` |
| Secret | `AZURE_SUBSCRIPTION_ID` |
| Variable | `AZURE_WEBAPP_NAME` |

## 4. Push `main`

The pipelines are already in `.github/workflows/build.yml` and `.github/workflows/deploy.yml`.

1. Push those files to `main`.
2. **Build** runs `npm run build` and uploads the zip.
3. **Deploy** publishes that zip to `AZURE_WEBAPP_NAME` and starts it with `node node_modules/next/dist/bin/next start`.
4. On the first Deploy, open **Settings** > **Environments** > **production** and leave required reviewers off.

A pull request runs Build only. The live site changes when a commit reaches `main` and Deploy is green.

## 5. Check the site

Open the web app's default domain.

1. Load the home page, Work Experience Program, Company, and one course.
2. Ask the chat widget a training question.
3. Submit **Request callback**, then find an item with `type` `enquiry` in Cosmos Data Explorer under `tinitiate` / `items`.
