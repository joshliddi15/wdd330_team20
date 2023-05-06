import { getParams, loadHeaderFooter } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';

loadHeaderFooter();
debugger;
const productId = getParams('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
debugger;
product.init();
