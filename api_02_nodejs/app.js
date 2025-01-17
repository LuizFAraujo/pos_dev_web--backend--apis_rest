import express from "express";
import db from "./db/conectaDb.js";

import createTables from "./db/dataInit/createInitTables.js";
import insertInitialData from "./db/dataInit/initDataTables.js";

import categoriesRouter from "./routes/categories.js";
import customersRouter from "./routes/customers.js";
import ordersRouter from "./routes/orders.js";
import productsRouter from "./routes/products.js";
import suppliersRouter from "./routes/suppliers.js";

const app = express();
const port = 3000;

// ==================
// Executar na primeira vez, comentar depois...
// createTables(); // Chamar a função para criar as tabelas
// db.serialize(() => {
//   insertInitialData(); // Chamar para inserir dados iniciais
// });
// ==================

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/customers", customersRouter);
app.use("/orders", ordersRouter);
app.use("/products", productsRouter);
app.use("/suppliers", suppliersRouter);

app.get("/", (req, res) => {
  res.json({ message: "Node.js API Rest is running." });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
