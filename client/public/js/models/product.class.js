class Product {
  constructor(
    id,
    name,
    image,
    imageAltText,
    description,
    price,
    discountPrice
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.imageAltText = imageAltText;
    this.description = description;
    this.price = price;
    this.discountPrice = discountPrice;
  }
}

export default Product;
