import ProductData from './ProductData.mjs';
import ProductListing from './ProductList.mjs';
import { updateCartCount } from './cartCount';

const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const products = new ProductListing('tents', dataSource, element);

products.init();

updateCartCount('null');
