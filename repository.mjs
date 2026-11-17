const read = 'SELECT * FROM records WHERE category = ? AND id = ?';
const decode = row => row && ({
  ...JSON.parse(row.value), id: row.id, revision: row.revision,
  updatedAt: row.updated_at
});

export function repository(db) {
  const statement = (sql, ...values) => db.prepare(sql).bind(...values);
  return {
    async list(category) {
      const query = 'SELECT * FROM records WHERE category = ? ORDER BY id';
      const { results } = await statement(query, category).all();
      return results.map(decode);
    },
    async get(category, id) {
      return decode(await statement(read, category, id).first());
    },
    async create(category, value) {
      const query = 'INSERT INTO records VALUES (?, ?, ?, ?, 1) RETURNING *';
      return decode(await statement(query, crypto.randomUUID(), category,
        JSON.stringify(value), new Date().toISOString()).first());
    },
    async update(category, id, revision, value) {
      const query = `UPDATE records SET value = ?, updated_at = ?, revision = revision + 1
        WHERE category = ? AND id = ? AND revision = ? RETURNING *`;
      return decode(await statement(query, JSON.stringify(value),
        new Date().toISOString(), category, id, revision).first());
    },
    async remove(category, id, revision) {
      const query = 'DELETE FROM records WHERE category = ? AND id = ? AND revision = ? RETURNING id';
      return Boolean(await statement(query, category, id, revision).first());
    }
  };
}
