import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
    <img src="${product.Image}" alt="Image of ${product.Name}">
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p>
  </a>
</li>`;
}

export default class ProductListing {
  constructor(category, dataSource, listElement) {
    this.catetory = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const fullList = await this.dataSource.getData();
    const idArr = ['880RR', '344YJ', '985PR', '985RF'];
    const list = this.filterList(fullList, idArr);
    console.log({ list });
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }

  filterList(list, idArr) {
    return idArr.map((id) => list.filter((item) => item.Id === id)[0]);
  }
}
