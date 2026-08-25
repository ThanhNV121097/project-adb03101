CREATE TABLE IF NOT EXISTS landing_messages (
  id integer PRIMARY KEY,
  text text NOT NULL CONSTRAINT landing_messages_text_not_blank CHECK (length(btrim(text)) > 0),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT landing_messages_singleton CHECK (id = 1)
);

INSERT INTO landing_messages (id, text)
VALUES (1, 'Hello Word')
ON CONFLICT (id) DO NOTHING;
