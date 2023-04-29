import { setLocalStorage } from './utils.mjs';
import { getLocalStorage } from './utils.mjs';

const cartCount = document.querySelector('.cart-count');

export function getCartCount() {
  let itemCount = getLocalStorage('itemCount');
  if (!itemCount) {
    itemCount = 0;
  }
  cartCount.textContent = itemCount;
  setLocalStorage('itemCount', itemCount);
}
