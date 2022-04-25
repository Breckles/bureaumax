const adminProductsTableRoot = `<table id="adminProductsList">
<tr>
<th>ID</th>
<th>Image</th>
<th>Image alt Text</th>
<th>Name</th>
<th>Description</th>
<th>Price</th>
<th>Discount Price</th>
</tr>
</table>`;

class AdminProductsTable {
  constructor(products) {
    this.products = products;

    const adminProductsTableTemplate = document.createElement('template');
    adminProductsTableTemplate.innerHTML = adminProductsListRoot;
    const adminProductsTable = adminProductsTableTemplate.content.firstChild;

    for (const product of this.products) {
      const newRow = `<tr>
      <th>${product.id}</th>
      <td>${product.image}</td>      
      <td>${}</td>      
      <td>${}</td>      
      <td>${}</td>      
      <td>${}</td>      
      <td>${}</td>      
      </tr>`;
    }
  }
}

export default AdminProductsList;
