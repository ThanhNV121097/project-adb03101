# ERD — hello-word-16

## Tables

### `landing_messages`

| Column | Type | Null | Default | Notes |
|---|---|---|---|---|
| `id` | `integer` | no | none | Primary key; scaffold seeds `1` only |
| `text` | `text` | no | none | Message shown on landing page; must be non-empty |
| `created_at` | `timestamptz` | no | `now()` | Row creation time |
| `updated_at` | `timestamptz` | no | `now()` | Last text update time |

Constraints:

- `landing_messages_pkey` on `id`.
- `landing_messages_text_not_blank`: `length(btrim(text)) > 0`.
- `landing_messages_singleton`: `id = 1`.

Seed data:

| id | text |
|---|---|
| `1` | `Hello Word` |

## Relationships

None. Project needs one stored message row only.

## Migration policy

- SQL migrations live in `code/backend/migrations/`.
- Backend applies `.up.sql` files in filename order on boot.
- `schema_migrations.version` tracks applied files.
