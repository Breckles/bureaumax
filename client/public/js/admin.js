import { getProducts } from './db.js';
import ProductModal from './product_modal/product_modal.js';
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

  const productModal = new ProductModal(product);

  document.body.append(productModal.content);
  const modalMode = product ? 'update' : 'create';
  console.log(modalMode);

  document
    .getElementById('productModal')
    .getElementsByTagName('form')[0]
    .addEventListener('submit', onSubmitHandler.bind(null, modalMode));
};
window.openProductModal = openProductModal;

const closeProductModal = () => {
  const modal = document.getElementById('productModal');
  document.body.removeChild(modal);
};
// window.closeProductModal = closeProductModal;

const deleteProducts = (ids) => {
  const userConfirmed = window.confirm(
    `Etes-vous certain de vouloir supprimer ${
      ids.length > 1 ? 'ces articles' : 'cet article'
    }?`
  );

  if (userConfirmed) {
    const body = new FormData();
    body.append('ids', JSON.stringify(ids));
    fetch(`${rootURL}/serveur/api/product/delete.php`, {
      method: 'POST',
      body: body,
    })
      .then((response) => {
        if (response.ok) {
          console.log('success!');
          onProductsDeleted(ids);
        } else {
          console.log(response.statusText);
        }
      })
      .catch((error) => {
        console.log('Error: %o', error);
      });
  }
};
window.deleteProducts = deleteProducts;

const renderProductsTable = (products) => {
  const container = document.getElementById('adminProductsTableContainer');
  const productsTable = new AdminProductsTable(products, rootURL);

  container.appendChild(productsTable.content);
};

const removeProductsTable = () => {
  document.getElementById('adminProductsTableContainer').replaceChildren();
};

const onProductUpdated = (id) => {
  refreshTable(products);
};

const onProductsDeleted = (ids) => {
  products = products.filter((product) => !ids.includes(product.id));
  console.log(products);
  refreshTable(products);
};

const onSubmitHandler = (mode, event) => {
  event.preventDefault();
  console.log(mode);

  let formAction = `${rootURL}/serveur/api/product/create.php`;

  if (mode === 'update') {
    formAction = `${rootURL}/serveur/api/product/update.php`;
  }

  const formData = new FormData(event.currentTarget);
  fetch(formAction, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log('success!');
        onProductUpdated(formData.get('id'));
      } else {
        console.log(response.statusText);
      }
    })
    .catch((error) => {
      console.log('Error: %o', error);
    });
};

const refreshTable = (products) => {
  removeProductsTable();
  renderProductsTable(products);
};
