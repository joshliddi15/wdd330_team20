import { getLocalStorage, setLocalStorage } from './utils.mjs';

const cartCount = document.querySelector('.cart-count');

export function updateCartCount() {
  let cart = getLocalStorage('so-cart');
  if (!cart) {
    cart = [];
    setLocalStorage('so-cart', cart);
  }
  cartCount.textContent = cart.length;
}
