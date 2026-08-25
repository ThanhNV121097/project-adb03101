# Architecture Overview — hello-word-16

## Shape and stack

Fullstack app: Next.js frontend, Go backend, PostgreSQL database.

| Layer | Choice | Reason | Rejected alternative |
|---|---|---|---|
| Frontend | Next.js 15 App Router + TypeScript | Matches platform scaffold and one-page UI | Static HTML rejected because text must come from API |
| Styling | Tailwind v3 + CSS tokens in `app/globals.css` | Existing design-token CI checks CSS token use | Component hardcoded CSS rejected because CI blocks hardcoded values |
| Backend | Go 1.22+ HTTP server | Small API, fast compile, matches default stack | Node API rejected to avoid extra runtime stack |
| Database | PostgreSQL 16 | Required source for one stored message row | In-memory/config text rejected because frontend must read DB-backed value through API |
| Run | `docker compose --profile local up --build` | Boots DB, backend, frontend together | Separate manual commands rejected because pipeline needs one boot path |

## Repository layout

```text
code/backend/              Go module
  cmd/api/main.go          HTTP entrypoint, migrations, routes
  migrations/              Ordered SQL migration pairs
  .env.example             Backend env contract
code/frontend/             Next.js app
  app/layout.tsx           App shell
  app/page.tsx             Composition root only
  app/globals.css          Shared tokens and base styles
  .env.example             Frontend env contract
docs/architecture/         Shared technical docs
```

## Data flow

1. PostgreSQL stores one landing message row.
2. Backend applies migrations at boot, then serves `/healthz` and `/v1/message`.
3. Frontend reads `NEXT_PUBLIC_API_URL`, calls backend, and later story component renders returned `text`.

## Backend conventions

- One main package only: `code/backend/cmd/api`.
- Read `DATABASE_URL` and `PORT`; fallback order for port: `PORT`, `APP_PORT`, `8080`.
- Apply every `migrations/*.up.sql` file in filename order before accepting traffic.
- Track applied migrations in `schema_migrations`; reruns must no-op.
- `/healthz` returns 200 only after migrations succeeded and `SELECT 1` succeeds.
- API responses use JSON and service contract in `docs/architecture/services.md`.

## Frontend conventions

- `app/page.tsx` stays Server Component and only composes story components.
- Story components use `export default function ComponentName()`.
- Components needing browser APIs or handlers start with literal first line `"use client"`.
- Story authors do not edit `app/globals.css`; shared visual values must use existing tokens.
- No hardcoded colours or token fallbacks in CSS modules.

## Environment variables

| Service | Key | Required | Purpose |
|---|---|---|---|
| Backend | `DATABASE_URL` | yes | PostgreSQL connection string injected by runtime/compose |
| Backend | `PORT` | yes | HTTP listen port |
| Backend | `APP_PORT` | no | Secondary local fallback for listen port |
| Frontend | `NEXT_PUBLIC_API_URL` | yes | Browser-visible backend base URL |
| Compose | `POSTGRES_USER` | yes | Local database username |
| Compose | `POSTGRES_PASSWORD` | yes | Local database password |
| Compose | `POSTGRES_DB` | yes | Local database name |

## Run and checks

```sh
cp .env.example .env
cp code/backend/.env.example code/backend/.env
cp code/frontend/.env.example code/frontend/.env.local
docker compose --profile local up --build
```

CI reads `.github/workflows/ci.yml` and runs:

- `go build ./...`, `go vet ./...`, `go test ./...` in `code/backend`.
- `npm ci`, `npm run lint`, `npm run build`, `npm test --if-present` in `code/frontend`.
- CSS token checks for hardcoded values, undefined tokens, and token fallbacks.

## Rollout notes and risks

- Database starts empty; backend self-migration seeds required row.
- No auth, editing, caching, telemetry, or animation in scope.
- If more messages appear later, add schema and API version changes deliberately; current model caps at one seeded row.
