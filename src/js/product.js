import { setLocalStorage } from './utils.mjs';
import { getLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';
import {updateCartCount} from './cartCount.js'
const dataSource = new ProductData('tents');


function addProductToCart(product) {
  //First get what is already in localStorage and assign it to a variable (if there is anything, it will come back as an array):
  let cart = getLocalStorage('so-cart');
  //if there was no "cart" already, like you didn't have anything yet, then create an empty array:
  if (!cart) {
    cart = [];
  }
  //now we push the product that the user clicked on with "addtoCart" button to the end of the array
  cart.push(product);
  //and then setLocalStorage with the new contents of the cart:
  setLocalStorage('so-cart', cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  updateCartCount('add')
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
