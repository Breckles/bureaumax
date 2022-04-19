<?php
require_once('../includes/configbd.inc.php');
require_once('../models/product.class.php');
require_once('../models/user.class.php');
session_start();

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

$productsJSON = json_encode($products);

$user = null;

if (isset($_SESSION['usager'])) {
  $user = $_SESSION['usager'];
}

$response = (object)array("products" => $products, "user" => $user);

echo json_encode($response);
