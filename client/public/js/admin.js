import { getProducts } from './db.js';
import AdminProductsTable from './admin_manage_products/admin_products_table.js';

const rootURL = 'http://localhost:8080/sym_bureaumax_partie_1';

const siteBackdropId = 'siteBackdrop';
let openDialogId = null;

let products;

getProducts()
  .then((response) => {
    products = response.products;
    renderProductsTable(products);
  })
  .catch((error) => {
    console.error(
      'There was an issue fetching the products: %o',
      error.message
    );
  });

const openDialog = (id) => {
  if (id === 'cartModal') {
    openCartModal();
    openDialogId = id;
    document.getElementById(siteBackdropId).classList.add('visible');
    return;
  }

  const dialog = document.getElementById(id);

  if (!!dialog) {
    dialog.classList.add('open');
    openDialogId = id;
    document.getElementById(siteBackdropId).classList.add('visible');
  }
};
window.openDialog = openDialog;

const closeDialog = () => {
  if (openDialogId === 'cartModal') {
    closeCartModal();
    openDialogId = null;
    document.getElementById(siteBackdropId).classList.remove('visible');
    return;
  }

  if (openDialogId !== null) {
    document.getElementById(openDialogId).classList.remove('open');
    openDialogId = null;
    document.getElementById(siteBackdropId).classList.remove('visible');
  }
};
window.closeDialog = closeDialog;

const renderProductsTable = (products) => {
  const container = document.getElementById('adminProductsTableContainer');
  const productsTable = new AdminProductsTable(products, rootURL);

  container.appendChild(productsTable.content);
};

const body = { ids: [1, 2, 3] };

fetch(`${rootURL}/serveur/api/product/delete.php?ids=dkdk`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });
