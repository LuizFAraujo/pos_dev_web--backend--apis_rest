import express from "express";
const router = express.Router();
import db from "../db/conectaDb.js";

router.get("/", (req, res) => {
  const sql = "SELECT * FROM customer";
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
  const { firstName, lastName, email, phoneNumber } = req.body;
  const sql =
    "INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES (?,?,?,?)";
  const params = [firstName, lastName, email, phoneNumber];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: {
        id: this.lastID,
        firstName,
        lastName,
        email,
        phoneNumber,
      },
    });
  });
});

export default router;
