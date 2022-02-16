import { settings } from './settings.js';
import Products from './components/products.js';
const app = {
  initData: function () {
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        thisApp.initProducts();
      });
  },

  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.scrollTo();
  },

  initProducts: function() {
    const thisApp = this;
    
    new Products(thisApp.data.products);
  },

  scrollTo: function () {
    const anchors = document.querySelectorAll('a.scroll-to');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const blockID = anchor.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
          block: 'start'
        });
      });
    }
  },
};

app.init();