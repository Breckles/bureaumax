<?php 
class Product {
  public int $id;
  public string $image;
  public string $imageAltText;
  public string $description;
  public float $price;
  public ?float $discountPrice;
}
