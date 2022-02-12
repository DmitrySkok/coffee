import { settings } from './settings.js';
const app = {
  initData: function () {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.scrollTo();
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
  }
};

app.init();