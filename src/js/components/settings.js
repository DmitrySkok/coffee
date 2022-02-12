export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
    feedbacks: 'feedbacks',
  },
};

export const select = { 
  templateOf: {
    productLeft: '#template-product-left',
    productRight: '#template-product-right',
  },
};

export const templates = {
  productLeft: Handlebars.compile(document.querySelector(select.templateOf.productLeft).innerHTML),
  productRight: Handlebars.compile(document.querySelector(select.templateOf.productRight).innerHTML),
};
