import express from "express";
const router = express.Router();
import db from "../db/conectaDb.js";

router.get("/", (req, res) => {
  const sql = "SELECT * FROM product";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

router.post("/", (req, res) => {
  const { name, description, price, stock } = req.body;
  const sql =
    "INSERT INTO product (name, description, price, stock) VALUES (?,?,?,?)";
  const params = [name, description, price, stock];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: {
        id: this.lastID,
        name,
        description,
        price,
        stock,
      },
    });
  });
});

export default router;
