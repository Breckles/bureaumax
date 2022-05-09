import Product from './models/product.class.js';

const baseURL = 'http://localhost:8080/sym_bureaumax_partie_1/serveur/api';

export const getProducts = () => {
  return fetch(`${baseURL}/products.php`).then((response) => {
    return response.json();
  });
};

export const getUser = () => {
  return fetch(`${baseURL}/user.php`).then((response) => {
    return response.json();
  });
};
