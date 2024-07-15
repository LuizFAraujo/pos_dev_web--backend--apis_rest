import express from "express";
const router = express.Router();
import db from "../db/conectaDb.js";

router.get("/", (req, res) => {
  const sql = "SELECT * FROM 'order'";
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
  const { productId, customerId, orderDate, quantity } = req.body;
  const sql =
    'INSERT INTO "order" (productId, customerId, orderDate, quantity) VALUES (?,?,?,?)';
  const params = [productId, customerId, orderDate, quantity];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: {
        id: this.lastID,
        productId,
        customerId,
        orderDate,
        quantity,
      },
    });
  });
});

export default router;
