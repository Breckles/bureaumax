import Cart from './models/cart.class.js';
import Toast from './toast/toast.js';
import { renderCartModal } from './cart_modal/cart_modal.js';
import { getProducts, getUser } from './db.js';

const rootURL = 'http://localhost:8080/sym_bureaumax_partie_1';

const siteBackdropId = 'siteBackdrop';
let openDialogId = null;
let displayedAuthFormId = 'loginForm';
let user = null;

let cart = null;

getProducts().then((response) => {
  user = response.user;
  renderProducts(response.products);
});

getUser().then((response) => {
  user = response;

  if (response) {
    user = response;
    cart = Cart.getCart();
    cart.updateCartIconBadge();
  }
  // user = response;
});

///////////////// Drawer Interactions

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

const displayAuthForm = (id) => {
  const authForm = document.getElementById(id);

  if (!!authForm) {
    document.getElementById(displayedAuthFormId).classList.remove('active');
    authForm.classList.add('active');
    displayedAuthFormId = id;
  }
};
window.displayAuthForm = displayAuthForm;

const validatePasswordMatch = () => {
  const pwInput = document.getElementById('registerPasswordInput');
  const confirmPWInput = document.getElementById('confirmPasswordInput');

  confirmPWInput.setCustomValidity('');
  console.log(pwInput.value);
  console.log(confirmPWInput.value);

  if (pwInput.value !== confirmPWInput.value) {
    confirmPWInput.setCustomValidity(
      'Les mots de passes doivent etre identiques.'
    );
  }
};
window.validatePasswordMatch = validatePasswordMatch;

const openCartModal = () => {
  renderCartModal(cart);
};
window.openCartModal = openCartModal;

const closeCartModal = () => {
  const modal = document.getElementById('cartModal');
  document.body.removeChild(modal);
};
window.closeCartModal = closeCartModal;

//////////////// Cart Actions

const addToCartHandler = (product) => {
  cart.addToCart(product);
  Toast.display('Produit ajout?? au panier', 1500);
  document.getElementById('cartIconBadge').innerHTML = cart.numItems;
};
window.addToCartHandler = addToCartHandler;

///////////////// Products

const renderProducts = (products) => {
  const listEl = document.getElementById('productList');
  for (const product of products) {
    const priceHTML = product.discountPrice
      ? `<div class='productCardDiscountPrice'>${product.discountPrice}$</div>  
    <div class='productRegularPrice'>${product.price}$</div>`
      : `<div class='productCardPrice'>${product.price}$</div>`;

    const listItem = `<li id='product_${product.id}' class="productListItem">
    <a href="#">
    <div class="productCard">
      <img src='${rootURL}/serveur/productImages/${product.image}' alt='${product.imageAltText}'>
      <div class='productCardContent'>
      <h3>${product.name}</h3>
      <p class='productCardDescription'>${product.description}</p>
      <div class='productCardPriceContainer'>
      ${priceHTML}              
      </div>
      </div>
      </div>
      </a>
      </li>`;

    const templateEl = document.createElement('template');
    templateEl.innerHTML = listItem;

    if (user && user.role === 'M') {
      const addToCartButton = document.createElement('button');
      addToCartButton.type = 'button';
      addToCartButton.innerHTML = 'Ajouter au panier';
      addToCartButton.addEventListener(
        'click',
        addToCartHandler.bind(null, product)
      );

      templateEl.content
        .getElementById(`product_${product.id}`)
        .appendChild(addToCartButton);
    }

    // console.log(templateEl.content);
    listEl.appendChild(templateEl.content.firstChild);
  }
};
