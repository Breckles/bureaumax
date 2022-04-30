const adminProductsTable = `<div id="adminTableControls">\
<h2>Gérer les produits</h2>\
<button class="deleteButton" type="button">Supprimer <img src="../public/icones/circle_minus_icon.svg" width=15 height=15 /></button>\
<button class="addButton" type="button">Ajouter <img src="../public/icones/circle_plus_icon.svg" width=15 height=15 /></button>\
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

    const adminProductsTableTemplate = document.createElement('template');
    adminProductsTableTemplate.innerHTML = adminProductsTable;
    const tableBody = adminProductsTableTemplate.content.getElementById(
      'adminProductsTableBody'
    );

    for (const product of this.products) {
      const newRow = `<tr>\
      <td class="colCheckbox"><input type="checkbox" id="checkbox_product_${product.id}" name="deleteProducts" value=${product.id} aria-label="selectionner tous le produit ${product.id}" /></td>\
      <td class="colID">${product.id}</td>\
      <td><img src="${rootURL}/client/public/images/${product.image}" alt="${product.imageAltText}" /></td>\
      <td>${product.imageAltText}</td>\
      <td>${product.name}</td>\
      <td>${product.description}</td>\
      <td class="colPrice">${product.price}</td>\
      <td class="colDiscountPrice">${product.discountPrice}</td>\
      <td class="colAdminProductControls">\
      <button class="iconButton" type="button" aria-label="Modifier le produit numero ${product.id}">\
      <img src="${rootURL}/client/public/icones/pen_icon.svg" />\
      </button>\
      <button class="iconButton" type="button" aria-label="Supprimer le produit numero ${product.id}">\
      <img src="${rootURL}/client/public/icones/trash_can_icon.svg" />\
      </button>\
      </td>\
      </tr>`;

      const rowTemplate = document.createElement('template');
      rowTemplate.innerHTML = newRow;
      tableBody.appendChild(rowTemplate.content);
    }

    this.content = adminProductsTableTemplate.content;
  }

  deleteProductsHandler = () => {};
}

export default AdminProductsTable;
