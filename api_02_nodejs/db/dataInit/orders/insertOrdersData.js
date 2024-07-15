import db from "../../conectaDb.js";
import dataDb from "./ordersData.js";

function insertOrders() {
  dataDb.forEach((order) => {
    const { productId, customerId, orderDate, quantity } = order;
    db.run(
      `INSERT INTO 'order' (productId, customerId, orderDate, quantity) VALUES (?,?,?,?)`,
      [productId, customerId, orderDate, quantity],
      function (err) {
        if (err) {
          console.error("Erro ao inserir dados na tabela order:", err.message);
        }
      }
    );
  });
}

export default insertOrders;
