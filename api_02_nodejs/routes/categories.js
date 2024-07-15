import express from "express";
const router = express.Router();
import db from "../db/conectaDb.js";

router.get("/", (req, res) => {
  const sql = "SELECT * FROM category";
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
  const { name, description, isActive, createdAt } = req.body;
  const sql =
    "INSERT INTO category (name, description, isActive, createdAt) VALUES (?,?,?,?)";
  const params = [name, description, isActive, createdAt];

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
        isActive,
        createdAt,
      },
    });
  });
});

export default router;
