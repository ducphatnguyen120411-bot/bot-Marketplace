const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./market.db");

db.run(`
CREATE TABLE IF NOT EXISTS market (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  seller TEXT,
  item TEXT,
  price INTEGER
)`);

module.exports = db;
