import { getLocalStorage } from './utils.mjs';
import { setLocalStorage } from './utils.mjs';
import { getParams } from './utils.mjs';

export default class ProductDetails {
        constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        // once we have the product details we can render out the HTML
        // once the HTML is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main");
        document.getElementById('addToCart').addEventListener('click', this.addProductToCart.bind(this));
    }

    addProductToCart(product) {
        //First get what is already in localStorage and assign it to a variable (if there is anything, it will come back as an array):
        let cart = getLocalStorage('so-cart');
        //if there was no "cart" already, like you didn't have anything yet, then create an empty array:
        if (!cart) {
            cart = [];
        }
        let cartQty = 0;
        if (cart.contains(this.product)) {
            cartQty = 
        }
        const qty = {'Quantity': cartQty}
        this.product.assign(this.product,{Quantity: })
        //now we push the product that the user clicked on with "addtoCart" button to the end of the array
        (cart.push(this.product));
        setLocalStorage('itemCount', cart.length);
        //and then setLocalStorage with the new contents of the cart:
        setLocalStorage('so-cart', cart);
    }
    
        renderProductDetails(selector) {
            const element = document.querySelector(selector);
            element.insertAdjacentHTML(
            "afterBegin",
            productDetailsTemplate(this.product)
            );
        }}

        function productDetailsTemplate(product) {
            return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
              <h2 class="divider">${product.NameWithoutBrand}</h2>
              <img
                class="divider"
                src="${product.Image}"
                alt="${product.NameWithoutBrand}"
              />
              <p class="product-card__price">$${product.FinalPrice}</p>
              <p class="product__color">${product.Colors[0].ColorName}</p>
              <p class="product__description">
              ${product.DescriptionHtmlSimple}
              </p>
              <div class="product-detail__add">
                <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
              </div></section>`;
          }