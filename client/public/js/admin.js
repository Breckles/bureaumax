import { getProducts } from './db.js';
import Toast from './toast/toast.js';
import ProductModal from './product_modal/product_modal.js';
import AdminProductsTable from './admin_manage_products/admin_products_table.js';

const rootURL = 'http://localhost/bureaumax';

const siteBackdropId = 'siteBackdrop';
let openDialogId = null;

let products = [];

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

const deleteProducts = async (ids) => {
  const userConfirmed = window.confirm(
    `Etes-vous certain de vouloir supprimer ${
      ids.length > 1 ? 'ces articles' : 'cet article'
    }?`
  );
  if (userConfirmed) {
    const body = new FormData();
    body.append('ids', JSON.stringify(ids));

    try {
      const response = await fetch(
        `${rootURL}/serveur/api/product/delete.php`,
        {
          method: 'POST',
          body: body,
        }
      );

      if (response.ok) {
        onProductsDeleted(ids);
      }
    } catch (error) {
      console.log('Error: %o', error);
    }
  }
};
window.deleteProducts = deleteProducts;

const renderProductsTable = () => {
  const container = document.getElementById('adminProductsTableContainer');
  const productsTable = new AdminProductsTable(products, rootURL);
  container.replaceChildren(productsTable.content);
};

const onProductUpdated = (updatedProduct) => {
  closeDialog();
  const updatedProductIndex = products
    .map((product) => product.id)
    .indexOf(updatedProduct.id);

  if (updatedProductIndex === -1) {
    products.push(updatedProduct);
    Toast.display('Produit creé avec succes');
  } else {
    products[updatedProductIndex] = updatedProduct;
    Toast.display('Produit modifié avec succes');
  }
  refreshTable();
};

const onProductsDeleted = (ids) => {
  products = products.filter((product) => !ids.includes(product.id));
  const msg = ids.length === 1 ? 'Produit supprimé' : 'Produits supprimés';
  Toast.display(msg);
  refreshTable();
};

const onSubmitHandler = async (mode, event) => {
  event.preventDefault();
  console.log(mode);

  let formAction = `${rootURL}/serveur/api/product/create.php`;

  if (mode === 'update') {
    formAction = `${rootURL}/serveur/api/product/update.php`;
  }

  const formData = new FormData(event.currentTarget);

  try {
    const response = await fetch(formAction, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('success!');
      const returnedProduct = await response.json();
      onProductUpdated(returnedProduct);
    } else {
      console.log(response.statusText);
    }
  } catch (error) {
    console.log('Error: %o', error);
  }
};

const refreshTable = (products) => {
  renderProductsTable(products);
};
