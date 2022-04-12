<?php
require_once(ABSPATH . "/serveur/includes/configbd.inc.php");
require_once(ABSPATH . "/serveur/models/product.class.php");

function getProducts()
{
  global $connexion;

  $query = "SELECT * FROM products";

  $stmt = $connexion->prepare($query);
  $stmt->execute();
  $result = $stmt->get_result();

  $products = [];

  $product = $result->fetch_object('Product');

  while ($product) {
    array_push($products, $product);
    $product = $result->fetch_object('Product');
  }

  return $products;
}
