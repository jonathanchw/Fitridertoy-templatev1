import { productData } from "../js/ProductData.js";
import { item } from "./product-item.js";

const product = document.querySelector(".js_product__description");
const id = document.querySelector(".data-prod-id");
console.log(id);


const find = productData.find((product) => product.id == "product-2");
product.insertAdjacentHTML("beforeend", item(find));
 
