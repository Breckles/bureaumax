import CartModalList from './cart_modal_list.js';
import CartModalBilling from './cart_modal_billing.js';

const cartModalHTML = `<div id="cartModal">
</div>`;

let cartModal;

export const renderCartModal = (cart) => {
  const cartModalTemplate = document.createElement('template');
  cartModalTemplate.innerHTML = cartModalHTML;
  cartModal = cartModalTemplate.content.firstChild;

  const cartModalList = new CartModalList(cart, cartUpdated);
  const cartModalBilling = new CartModalBilling(cart);

  cartModal.append(cartModalList.content);
  cartModal.appendChild(document.createElement('hr'));
  cartModal.append(cartModalBilling.content);

  document.body.append(cartModalTemplate.content);
};

const cartUpdated = (newCart) => {
  const newModalBilling = new CartModalBilling(newCart);
  cartModal.replaceChild(newModalBilling.content, cartModal.lastChild);
};
