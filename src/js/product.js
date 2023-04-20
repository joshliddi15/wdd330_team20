import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // setLocalStorage("so-cart", product);
  let currentCart = JSON.parse(localStorage.getItem("so-cart"));
  if (!currentCart) {
    currentCart = [];
  }
  currentCart.push(product);
  setLocalStorage("so-cart", currentCart);

}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);


// let currentCart = JSON.parse(localStorage.getItem("so-cart"));
// currentCart.push(product);
// setLocalStorage("so-cart", currentCart);