import db from "../../conectaDb.js";
import dataDb from "./productsData.js";

function insertProducts() {
  dataDb.forEach((product) => {
    const { name, description, price, stock } = product;
    db.run(
      `INSERT INTO product (name, description, price, stock) VALUES (?,?,?,?)`,
      [name, description, price, stock],
      function (err) {
        if (err) {
          console.error(
            "Erro ao inserir dados na tabela product:",
            err.message
          );
        }
      }
    );
  });
}

export default insertProducts;
