import { productData } from "../js/ProductData.js";
import { item } from "./product-item.js";

const productsList = document.querySelector(".js_products__list");

productData.forEach((product) => {
  productsList.insertAdjacentHTML("beforeend", item(product));
});
