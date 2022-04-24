const cartModalBillingRoot = `<div id="cartModalBilling"></div>`;

class CartModalBilling {
  constructor(cart) {
    this.cart = cart;
    const cartModalBillingTemplate = document.createElement('template');
    cartModalBillingTemplate.innerHTML = cartModalBillingRoot;
    const cartModalBilling = cartModalBillingTemplate.content.firstChild;

    const cartSubTotal = cart.cartItems.reduce((sum, cartItem, i) => {
      if (cartItem.product.discountPrice) {
        return (sum += cartItem.product.discountPrice * cartItem.amount);
      }

      return (sum += cartItem.product.price * cartItem.amount);
    }, 0);

    // Calculate a 15% tax
    const cartTaxes = cartSubTotal * 0.15;

    const cartGrandTotal = cartSubTotal + cartTaxes;

    const billingInfo = `
    <div class="labels">
    <div>Nombre d'items :</div>
    <div>Sous-total :</div>
    <div>Taxes :</div>
    <div>Grand total :</div>
    </div>
    
    <div class="values">
    <div>${cart.numItems}</div>
    <div>${cartSubTotal.toFixed(2)}$</div>
    <div>${cartTaxes.toFixed(2)}$</div>
    <div>${cartGrandTotal.toFixed(2)}$</div>
    </div>
    `;

    cartModalBilling.innerHTML = billingInfo;

    this.content = cartModalBillingTemplate.content;
  }
}

export default CartModalBilling;
