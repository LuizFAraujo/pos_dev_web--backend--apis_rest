import db from "../../conectaDb.js";
import dataDb from "./categoriesData.js";

function insertCategories() {
  dataDb.forEach((category) => {
    const { name, description, isActive, createdAt } = category;
    db.run(
      `INSERT INTO category (name, description, isActive, createdAt) VALUES (?,?,?,?)`,
      [name, description, isActive, createdAt],
      function (err) {
        if (err) {
          console.error(
            "Erro ao inserir dados na tabela category:",
            err.message
          );
        }
      }
    );
  });
}

export default insertCategories;
