import { getProducts } from './db.js';
import { renderProductModal } from './product_modal/product_modal.js';
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
  const dialog = document.getElementById(id);

  if (!!dialog) {
    dialog.classList.add('open');
    openDialogId = id;
    document.getElementById(siteBackdropId).classList.add('visible');
  }
};
window.openDialog = openDialog;

const closeDialog = () => {
  if (openDialogId === 'productModal') {
    closeProductModal();
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

const openProductModal = (product = null) => {
  openDialogId = 'productModal';
  document.getElementById(siteBackdropId).classList.add('visible');
  renderProductModal(`${rootURL}/serveur/api/product/create.php`, product);
};
window.openProductModal = openProductModal;

const closeProductModal = () => {
  const modal = document.getElementById('productModal');
  document.body.removeChild(modal);
};
// window.closeProductModal = closeProductModal;

const renderProductsTable = (products) => {
  const container = document.getElementById('adminProductsTableContainer');
  const productsTable = new AdminProductsTable(products, rootURL);

  container.appendChild(productsTable.content);
};
