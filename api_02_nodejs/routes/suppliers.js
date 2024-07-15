import express from "express";
const router = express.Router();
import db from "../db/conectaDb.js";

router.get("/", (req, res) => {
  const sql = "SELECT * FROM supplier";
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
  const { companyName, contactName, email, phone } = req.body;
  const sql =
    "INSERT INTO supplier (companyName, contactName, email, phone) VALUES (?,?,?,?)";
  const params = [companyName, contactName, email, phone];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: {
        id: this.lastID,
        companyName,
        contactName,
        email,
        phone,
      },
    });
  });
});

export default router;
