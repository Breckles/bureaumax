import Product from './models/product.class.js';

const baseURL = 'http://192.168.2.16:8080/sym_bureaumax_partie_1/serveur/api';

export const getProducts = () => {
  return fetch(`${baseURL}/products.php`).then((response) => {
    console.log(response);
    return response.json();
  });
};
