import db from "../../conectaDb.js";
import dataDb from "./customersData.js";

function insertCustomers() {
  dataDb.forEach((customer) => {
    const { firstName, lastName, email, phoneNumber } = customer;
    db.run(
      `INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES (?,?,?,?)`,
      [firstName, lastName, email, phoneNumber],
      function (err) {
        if (err) {
          console.error(
            "Erro ao inserir dados na tabela customer:",
            err.message
          );
        }
      }
    );
  });
}

export default insertCustomers;
