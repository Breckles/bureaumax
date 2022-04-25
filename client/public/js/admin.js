import { getProducts } from './db.js';

const rootURL = 'http://localhost:8080/sym/bureaumax';

let products;

getProducts()
  .then((response) => {
    products = response.products;
  })
  .catch((error) => {
    console.error('There was an issue fetching the products.');
  });
