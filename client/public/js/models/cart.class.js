import Product from './product.class.js';

export class Cart {
  constructor(cartItems = []) {
    this.cartItems = cartItems;
    this.numItems = this.cartItems.reduce(
      (sum, currentCartItem, index) => sum + currentCartItem.amount,
      0
    );
    // this.updateCartIconBadge();
  }

  static getCart = () => {
    const storedCart = localStorage.getItem('bd_boutique_cart');

    if (!storedCart) {
      return new Cart([]);
    }

    const cart = JSON.parse(storedCart);

    const items = [];

    for (const cartItem of cart.cartItems) {
      const product = new Product(
        cartItem.product.id,
        cartItem.product.name,
        cartItem.product.image,
        cartItem.product.imageAltText,
        cartItem.product.description,
        cartItem.product.price,
        cartItem.product.discountPrice
      );

      items.push(new CartItem(product, cartItem.amount));
    }

    return new Cart(items);
  };

  getItems = () => {
    return [...this.cartItems];
  };

  addToCart = (product) => {
    // See if product is already in cart
    const existingCartItem = this.cartItems.find((cartItem) => {
      return cartItem.product.id === product.id;
    });

    if (existingCartItem) {
      // Item already in cart, increment amount
      existingCartItem.amount++;
    } else {
      this.cartItems.push(new CartItem(product, 1));
    }

    this.numItems++;

    this.saveCart();
    this.updateCartIconBadge();
  };

  removeFromCart = (product) => {
    // Find index of product in cart if it exists
    const index = this.cartItems
      .map((item) => item.product.id)
      .indexOf(product.id);

    if (index === -1) {
      // Item doesn't exist??? Do nothing.
      return;
    }

    if (this.cartItems[index].amount > 1) {
      // More than one of the product in cart, decrement amount
      existingCartItem.amount--;
    } else {
      // Only one of product in cart, remove cart item
      this.cartItems.splice(index, 1);
    }

    this.numItems--;

    this.saveCart();
    this.updateCartIconBadge();
  };

  saveCart = () => {
    localStorage.setItem('bd_boutique_cart', JSON.stringify(this));
  };

  updateCartIconBadge = () => {
    document.getElementById('cartIconBadge').innerHTML = this.numItems;
  };
}

class CartItem {
  constructor(product, amount = 1) {
    this.product = product;
    this.amount = amount;
  }
}

export default Cart;
