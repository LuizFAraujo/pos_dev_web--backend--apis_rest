import db from "../../conectaDb.js";
import dataDb from "./suppliersData.js";

function insertSuppliers() {
  dataDb.forEach((supplier) => {
    const { companyName, contactName, email, phone } = supplier;
    db.run(
      `INSERT INTO supplier (companyName, contactName, email, phone) VALUES (?,?,?,?)`,
      [companyName, contactName, email, phone],
      function (err) {
        if (err) {
          console.error(
            "Erro ao inserir dados na tabela supplier:",
            err.message
          );
        }
      }
    );
  });
}

export default insertSuppliers;
