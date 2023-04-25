import { setLocalStorage, getLocalStorage } from '../modules/utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // use our dataSource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // once we have the product details we can render out the HTML
    this.renderProductDetails();
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addToCart.bind(this));
  }

  addToCart() {
    // First get what is already in localStorage and assign it to a variable (if there is anything, it will come back as an array):
    let cart = getLocalStorage('so-cart');

    // If there was no "cart" already,then create an empty array:
    if (!cart) {
      cart = [];
    }

    // Now we push the product that the user clicked on with "addtoCart" button to the end of the array
    cart.push(this.product);

    // And then setLocalStorage with the new contents of the cart:
    setLocalStorage('so-cart', cart);
  }

  renderProductDetails() {
    let temp = document.getElementsByTagName('template')[0];
    let clone = temp.content.cloneNode(true);
    document.getElementsByTagName('main')[0].appendChild(clone);
  }
}
