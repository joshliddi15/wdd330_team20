import { setLocalStorage } from './utils.mjs';
import { getLocalStorage } from './utils.mjs';

const cartCount = document.querySelector('.cart-count');

export function updateCartCount(status) {
  let itemCount = getLocalStorage('itemCount');
  if (!itemCount) {
    itemCount = 0;
  }
  if (status == 'add'){
   itemCount++
  }
  else if(status == 'subtract'){
   itemCount--
  }
  cartCount.textContent = itemCount;
  setLocalStorage('itemCount', itemCount);
}


