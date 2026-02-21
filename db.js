const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./market.db", (err) => {
  if (err) console.error(err.message);
  else console.log("✅ Database connected");
});

db.run(`
CREATE TABLE IF NOT EXISTS market (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  seller TEXT,
  item TEXT,
  price INTEGER
)
`);

module.exports = db;
