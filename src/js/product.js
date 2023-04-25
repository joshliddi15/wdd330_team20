import { getParams } from './modules/utils.mjs';
import ProductData from './modules/ProductData.mjs';
import ProductDetails from './modules/ProductDetails.mjs';

const id = getParams('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(id, dataSource);

await product.init();

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', product.addToCart());
