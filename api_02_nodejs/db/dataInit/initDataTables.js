import insertCategories from "./categories/insertCategoriesData.js";
import insertCustomers from "./customers/insertCustomersData.js";
import insertOrders from "./orders/insertOrdersData.js";
import insertProducts from "./products/insertProductsData.js";
import insertSuppliers from "./suppliers/insertSuppliersData.js";

export default function insertInitialData() {
  insertCategories();
  insertCustomers();
  insertOrders();
  insertProducts();
  insertSuppliers();
}
