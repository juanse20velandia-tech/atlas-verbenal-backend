import { seed } from './data.mjs';

export async function initialize(db) {
  const marker = db.prepare("SELECT key FROM metadata WHERE key = 'initial-v1'");
  if (await marker.first()) return;
  const query = `INSERT OR IGNORE INTO records
    SELECT ?, ?, ?, ?, 1 WHERE NOT EXISTS (SELECT 1 FROM metadata WHERE key = 'initial-v1')`;
  const rows = seed.map(([id, category, value]) => db.prepare(query).bind(id,
    category, JSON.stringify(value), '2026-11-16T00:00:00.000Z'));
  await db.batch([...rows, db.prepare("INSERT OR IGNORE INTO metadata VALUES ('initial-v1')")]);
}
