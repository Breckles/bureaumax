const cartModalListRoot = `<ul id="cartModalList"></ul>`;

class CartModalList {
  constructor(cart, cartUpdated) {
    this.cart = cart;
    this.cartUpdated = cartUpdated;

    const cartModalListTemplate = document.createElement('template');
    cartModalListTemplate.innerHTML = cartModalListRoot;
    const cartModalList = cartModalListTemplate.content.firstChild;

    // Add list headers
    const listHeaders = `<li class="cartModalListItem cartModalListHeaders">
  <div></div>
  <div>Produit</div>
  <div class="price">Prix</div>
  <div class="amount">Qté</div>
  <div class="totalPrice">Total</div>
  </li>`;
    const listHeadersTemplate = document.createElement('template');
    listHeadersTemplate.innerHTML = listHeaders;
    cartModalList.append(listHeadersTemplate.content);

    // Populate the list
    const cartItems = cart.cartItems;
    for (let cartItem of cartItems) {
      const totalItemPrice =
        (cartItem.product.discountPrice
          ? cartItem.product.discountPrice
          : cartItem.product.price) * cartItem.amount;

      const cartModalListItem = `
    <li id="cartModalListItem_${cartItem.product.id}" class="cartModalListItem">
    <img
    src="http://localhost:8080/sym_bureaumax_partie_1/serveur/productImages/${
      cartItem.product.image
    }"
    alt="${cartItem.product.imageAltText}"
    />
    <div class="name">${cartItem.product.name}</div>
    <div class="price">${
      cartItem.product.discountPrice
        ? cartItem.product.discountPrice
        : cartItem.product.price
    }$</div>
    <div class="amount"><input id="input_${
      cartItem.product.id
    }" type="number" min="0" value="${cartItem.amount}" /></div>
    <div id="item_total_${
      cartItem.product.id
    }" class="totalPrice">${totalItemPrice.toFixed(2)}$</div>
    </li>`;

      const cartModalListItemTemplate = document.createElement('template');
      cartModalListItemTemplate.innerHTML = cartModalListItem;

      const amountInputEl = cartModalListItemTemplate.content.getElementById(
        `input_${cartItem.product.id}`
      );

      amountInputEl.addEventListener('change', (event) => {
        this.updateCartItemAmountHandler(cartItem.product, +event.target.value);
      });

      cartModalList.appendChild(cartModalListItemTemplate.content);
    }

    this.content = cartModalListTemplate.content;
  }

  updateCartItemAmountHandler = (product, newAmount) => {
    this.cart.updateCartItemAmount(product, newAmount);

    if (newAmount === 0) {
      const li = document.getElementById(`cartModalListItem_${product.id}`);
      console.log(li);

      li.remove();
    } else {
      const newItemTotalPrice =
        (product.discountPrice ? product.discountPrice : product.price) *
        newAmount;

      document.getElementById(
        `item_total_${product.id}`
      ).innerHTML = `${newItemTotalPrice.toFixed(2)}$`;
    }

    this.cartUpdated(this.cart);
  };
}

export default CartModalList;
