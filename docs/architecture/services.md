# Service Design — hello-word-16

Base path: backend receives paths without `/api` prefix. Use `/v1/...`.

## Error envelope

All non-2xx API errors return JSON:

```json
{
  "error": {
    "code": "internal_error",
    "message": "Internal server error"
  }
}
```

Rules:

- `code` is stable snake_case for tests and clients.
- `message` is safe for browser display; no SQL or internal detail.
- Unexpected backend failures use HTTP 500 with `internal_error`.

## Endpoints

### `GET /healthz`

Purpose: runtime readiness check.

Request: no body.

Success response: HTTP 200, `text/plain` body `ok`.

Failure: non-200 if migrations have not succeeded or `SELECT 1` fails.

### `GET /v1/message`

Purpose: return stored landing page message.

Request: no body.

Success response: HTTP 200.

```json
{
  "text": "Hello Word"
}
```

Errors:

| HTTP | code | When |
|---|---|---|
| 500 | `internal_error` | Database unavailable or singleton row missing |

## Frontend contract

- Frontend reads base URL from `NEXT_PUBLIC_API_URL`.
- Frontend calls `GET /v1/message`.
- Frontend renders returned `text`; no hardcoded product text in React component.
