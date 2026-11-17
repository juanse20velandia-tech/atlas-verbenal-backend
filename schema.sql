CREATE TABLE IF NOT EXISTS records (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  value TEXT NOT NULL CHECK(json_valid(value)),
  updated_at TEXT NOT NULL,
  revision INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX IF NOT EXISTS records_category_id ON records(category, id);
CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY);
