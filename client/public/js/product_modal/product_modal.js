const productModalHTML = '<div id="productModal"></div>';

/**
 *
 * @param {string} formURL The form submission url
 * @param {Product} product Product to be modified. If not supplied, a new
 * product will be created.
 */
export const renderProductModal = (formURL, product = null) => {
  const productModalTemplate = document.createElement('template');
  productModalTemplate.innerHTML = productModalHTML;
  const productModal = productModalTemplate.content.firstChild;

  console.log(product);

  const productModalHeaderHTML = product
    ? `<h3>Modifier le produit N<sup>o</sup> ${product.id}</h3>`
    : `<h3>Ajouter un nouveau produit<h3>`;

  const productModalFormHTML = `<form id="productForm">\
  <div class="formInput">\
  <label for="formProductName">Nom</label>\
  <input id="formProductName" name="formProductName" type="text" value="${
    product ? product.name : ''
  }">\
  <div>\
  <div class="formInput">\
  <label for="formProductDescription">Description du produit</label>\
  <textarea id="formProductDescription" name="formProductDescription">${
    product ? product.description : ''
  }</textarea>\
  <div>\
  <div class="formInput">\
  <label for="formProductPrice">Prix</label>\
  <input id="formProductPrice" name="formProductPrice" type="number" min="0" step="0.01" value="${
    product ? product.price : ''
  }">\
  <div>\
  <div class="formInput">\
  <label for="formProductDiscountPrice">Prix d'aubaine (laissez a 0 si pas d'aubaines)</label>\
  <input id="formProductDiscountPrice" name="formProductDiscountPrice" type="number" min="0" step="0.01" value="${
    product ? product.discountPrice : ''
  }">\
  <div>\
  <div class="formInput">\
  <label for="formProductImage">Image</label>\
  <input id="formProductImage" name="formProductImage" type="file">\
  ${product ? `<span>Valeur Presente: ${product.image}</span>` : ''}\
  <div>\
  <div class="formInput">\
  <label for="formProductImageAltText">Texte descriptif de l'image</label>\
  <textarea id="formProductImageAltText" name="formProductImageAltText">${
    product ? product.imageAltText : ''
  }</textarea>\
  <div>\
  <button type="submit">Soumettre</button>\
  </form>`;

  const contentTemplate = document.createElement('template');
  contentTemplate.innerHTML = productModalHeaderHTML + productModalFormHTML;
  productModal.append(contentTemplate.content);

  document.body.append(productModalTemplate.content);

  document
    .getElementById('productModal')
    .getElementsByTagName('form')[0]
    .addEventListener('submit', onSubmitHandler.bind(null, formURL));
};

const onSubmitHandler = (submitURL, event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  fetch(`${submitURL}/serveur/api/product/create.php`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log('success!');
      } else {
        console.log(response.statusText);
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};
