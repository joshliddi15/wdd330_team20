import { getLocalStorage, loadHeaderFooter, countCartContents } from './utils.mjs';
debugger;
loadHeaderFooter();
renderCartContents();

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  if (cartItems) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector('.cart-product-list').innerHTML = htmlItems.join('');
    renderTotal(cartItems);
    countCartContents();
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href=../product_pages/index.html?product=${item.Id} class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href=../product_pages/index.html?product=${item.Id}>
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.Quantity}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function calculateTotal(items) {
  let total = 0;
  items.forEach((item) => (total += item.FinalPrice * item.Quantity));
  return total;
}

function renderTotal(cartItems) {
  if (cartItems.length) {
    const total = calculateTotal(cartItems);
    document.querySelector('.cart-total').innerHTML = total;
    const htmlCartFooter = document.querySelector('.cart-footer');

    if (htmlCartFooter.classList.contains('hide')) {
      htmlCartFooter.classList.remove('hide');
    }
  } else {
    if (!htmlCartFooter.classList.contains('hide')) {
      htmlCartFooter.classList.add('hide');
    }
  }
}

