// initDb.js
import db from "../conectaDb.js";

function createTables() {
  db.run(
    `CREATE TABLE IF NOT EXISTS category (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        isActive BOOLEAN,
        createdAt TEXT
    )`,
    (err) => {
      if (err) {
        console.error("Erro ao criar tabela category:", err.message);
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS customer (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        email TEXT,
        phoneNumber TEXT
    )`,
    (err) => {
      if (err) {
        console.error("Erro ao criar tabela customer:", err.message);
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS 'order' (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        productId INTEGER,
        customerId INTEGER,
        orderDate TEXT,
        quantity INTEGER
    )`,
    (err) => {
      if (err) {
        console.error("Erro ao criar tabela order:", err.message);
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS product (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        price REAL,
        stock INTEGER
    )`,
    (err) => {
      if (err) {
        console.error("Erro ao criar tabela product:", err.message);
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS supplier (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        companyName TEXT,
        contactName TEXT,
        email TEXT,
        phone TEXT
    )`,
    (err) => {
      if (err) {
        console.error("Erro ao criar tabela supplier:", err.message);
      }
    }
  );
}

export default createTables;
