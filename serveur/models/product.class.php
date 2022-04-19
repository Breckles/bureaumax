<?php
class Product
{
  public int $id;
  public string $name;
  public string $image;
  public string $imageAltText;
  public string $description;
  public float $price;
  public ?float $discountPrice;
}
