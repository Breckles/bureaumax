const adminProductsTable = `<div id="adminTableControls">\
<h2>Gérer les produits</h2>\
<button id="deleteAllSelectedButton" class="deleteButton" type="button">Supprimer <img src="../public/icones/circle_minus_icon.svg" width=15 height=15 /></button>\
<button id="addProductButton" class="addButton" type="button">Ajouter <img src="../public/icones/circle_plus_icon.svg" width=15 height=15 /></button>\
</div>\
<table id="adminProductsTable">\
<thead>\
<tr>\
<th id="colCheckbox" scope="col"><input type="checkbox" id="selectAllCheckbox" name="selectAllCheckbox" aria-label="selectionner tous les produits" /></th>\
<th id="colId" scope="col">ID</th>\
<th id="colImage" scope="col">Image</th>\
<th id="colImageAltText" scope="col">Image alt Text</th>\
<th id="colName" scope="col">Name</th>\
<th id="colDescription" scope="col">Description</th>\
<th id="colPrice" scope="col">Price</th>\
<th id="colDiscount" scope="col">Discount Price</th>\
<th id="colAdminProductControls" scope="col"></th>\
</tr>\
</thead>\
<tbody id="adminProductsTableBody"></tbody>\
<tfoot></tfoot>\
</table>`;

class AdminProductsTable {
  constructor(products, rootURL) {
    this.products = products;
    this.selectAll = false;

    const adminProductsTableTemplate = document.createElement('template');
    adminProductsTableTemplate.innerHTML = adminProductsTable;
    const tableBody = adminProductsTableTemplate.content.getElementById(
      'adminProductsTableBody'
    );

    for (const product of this.products) {
      const newRowHTML = `<tr>\
      <td class="colCheckbox"><input type="checkbox" class="productCheckbox" id="checkbox_product_${product.id}" name="deleteProducts" value=${product.id} aria-label="selectionner le produit ${product.id}" /></td>\
      <td class="colID">${product.id}</td>\
      <td><img src="${rootURL}/serveur/productImages/${product.image}" alt="${product.imageAltText}" /></td>\
      <td>${product.imageAltText}</td>\
      <td>${product.name}</td>\
      <td>${product.description}</td>\
      <td class="colPrice">${product.price}</td>\
      <td class="colDiscountPrice">${product.discountPrice}</td>\
      <td class="colAdminProductControls">\
      <button id="modify_button_${product.id}" class="iconButton" type="button" aria-label="Modifier le produit numero ${product.id}">\
      <img src="${rootURL}/client/public/icones/pen_icon.svg" />\
      </button>\
      <button id="delete_button_${product.id}" class="iconButton" type="button" aria-label="Supprimer le produit numero ${product.id}">\
      <img src="${rootURL}/client/public/icones/trash_can_icon.svg" />\
      </button>\
      </td>\   
      </tr>`;

      const rowTemplate = document.createElement('template');
      rowTemplate.innerHTML = newRowHTML;

      rowTemplate.content
        .getElementById(`modify_button_${product.id}`)
        .addEventListener('click', (event) => {
          event.preventDefault();
          this.onModifyProductHandler(product);
        });

      rowTemplate.content
        .getElementById(`delete_button_${product.id}`)
        .addEventListener('click', (event) => {
          event.preventDefault();
          this.onDeleteProductHandler(product.id);
        });

      tableBody.appendChild(rowTemplate.content);
    }

    this.content = adminProductsTableTemplate.content;

    // Wire up eventHandlers
    const selectAllCheckboxInput =
      adminProductsTableTemplate.content.getElementById('selectAllCheckbox');
    selectAllCheckboxInput.addEventListener('click', () => {
      this.onToggleSelectAllHandler();
    });

    const addProductButton =
      adminProductsTableTemplate.content.getElementById('addProductButton');
    addProductButton.addEventListener('click', this.onAddProductHandler);

    const deleteAllSelectedButton =
      adminProductsTableTemplate.content.getElementById(
        'deleteAllSelectedButton'
      );
    deleteAllSelectedButton.addEventListener(
      'click',
      this.onDeleteAllSelectedHandler
    );
  }

  onAddProductHandler = (onProductUpdate) => {
    window.openProductModal();
  };

  onModifyProductHandler = (product, onProductUpdate) => {
    window.openProductModal(product);
  };

  onDeleteAllSelectedHandler = () => {
    const selectedCheckboxes = document.querySelectorAll(
      'input[name="deleteProducts"]:checked'
    );
    const ids = [];

    if (selectedCheckboxes.length > 0) {
      selectedCheckboxes.forEach((checkbox) => ids.push(+checkbox.value));
      window.deleteProducts(ids);
    }
  };

  onDeleteProductHandler = (id) => {
    window.deleteProducts([id]);
  };

  onToggleSelectAllHandler = () => {
    const productCheckboxes =
      document.getElementsByClassName('productCheckbox');

    this.selectAll = !this.selectAll;

    for (let i = 0; i < productCheckboxes.length; i++) {
      productCheckboxes[i].checked = this.selectAll;
    }
  };
}

export default AdminProductsTable;
