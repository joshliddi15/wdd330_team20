import ProductData from './ProductData.mjs';
import ProductListing from './ProductList.mjs';
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const dataSource = new ProductData('tents');
let element = document.querySelector('.product-list');
if (element === undefined) {
  element = document.querySelector('.cart-product-list');
}
const listing = new ProductListing('Tents', dataSource, element);

listing.init();
