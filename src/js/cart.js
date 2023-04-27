import { getLocalStorage, setLocalStorage } from './utils.mjs';

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));

  console.log(cartItems)
  document.querySelector('.product-list').innerHTML = htmlItems.join('');



  //Samantha code
  var all_buttons = document.querySelectorAll('.delete');

  //converting node list into array
  let myArray = Array.from(all_buttons)
  myArray.forEach((button)=>{
    button.addEventListener('click', ()=>{
      var result = cartItems.filter(cartItem => cartItem.Id !== button.dataset.id);
      setLocalStorage('so-cart', result);
      renderCartContents();
    })
  })
}

function cartItemTemplate(item) {
  console.log(item)
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
  <button type='button' data-id='${item.Id}' class='delete' > \u274C </button>
</li>`;

  return newItem;
}
//updates page
renderCartContents();




// trying to get the delete button to have event listener attached to it.
// const buttons = document.querySelectorAll('.delete_button');
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     document.getElementById('product').removeChild(document.getElementById('cart-card'));
//   });
// });
