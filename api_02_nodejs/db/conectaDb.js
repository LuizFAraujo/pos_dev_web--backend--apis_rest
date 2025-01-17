// db.js
import sqlite3 from "sqlite3";

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

export default db;
