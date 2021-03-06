const productModalHTML = '<div id="productModal"></div>';

/**
 *
 * @param {string} formURL The form submission url
 * @param {Product} product Product to be modified. If not supplied, a new
 * product will be created.
 */
class ProductModal {
  constructor(product = null) {
    const productModalTemplate = document.createElement('template');
    productModalTemplate.innerHTML = productModalHTML;
    const productModal = productModalTemplate.content.firstChild;

    const productModalHeaderHTML = product
      ? `<h3>Modifier le produit N<sup>o</sup> ${product.id}</h3>\
    `
      : `<h3>Ajouter un nouveau produit</h3>\
    `;

    const productModalFormHTML = `<form id="productForm">\
  <input id="formProductId" name="formProductId" type="number" value="${
    product ? product.id : ''
  }" hidden>\
  <div class="formInput">\
  <label for="formProductName">Nom</label>\
  <input id="formProductName" name="formProductName" type="text" value="${
    product ? product.name : ''
  }" placeholder="${product ? false : 'Nom du produit'}" required>\
  </div>\
  <div class="formInput">\
  <label for="formProductDescription">Description du produit</label>\
  <textarea id="formProductDescription" name="formProductDescription">${
    product ? product.description : ''
  }</textarea>\
  </div>\
  <div id="formPrices">\
  <div class="formInput">\
  <label for="formProductPrice">Prix</label>\
  <input id="formProductPrice" name="formProductPrice" type="number" min="0" step="0.01" value="${
    product?.price || ''
  }" placeholder="${product ? '' : 0}" required>\
  </div>\
  <div class="formInput">\
  <label for="formProductDiscountPrice">Prix d'aubaine (laissez a 0 si pas d'aubaines)</label>\
  <input id="formProductDiscountPrice" name="formProductDiscountPrice" type="number" min="0" step="0.01" value="${
    product?.discountPrice || ''
  }" placeholder="0">\
  </div>\
  </div>\
  <div class="formInput">\
  <label for="formProductImage">Image</label>\
  <input id="formProductImage" name="formProductImage" type="file">\
  ${
    product
      ? `<span id="currentImageValue">Valeur presente: ${product.image}</span>`
      : ''
  }\
  </div>\
  <div class="formInput">\
  <label for="formProductImageAltText">Texte descriptif de l'image</label>\
  <textarea id="formProductImageAltText" name="formProductImageAltText">${
    product ? product.imageAltText : ''
  }</textarea>\
  </div>\
  <button type="submit">Soumettre</button>\
  </form>`;

    const contentTemplate = document.createElement('template');
    contentTemplate.innerHTML = productModalHeaderHTML + productModalFormHTML;
    productModal.append(contentTemplate.content);

    this.content = productModalTemplate.content;
  }
}

export default ProductModal;
