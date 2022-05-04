<?php

session_start();
require_once("../../includes/configbd.inc.php");
require_once("../../models/product.class.php");

$prodId = $_POST['formProductId'];
$prodName = $_POST['formProductName'];
$prodDesc = $_POST['formProductDescription'];
$prodPrice = $_POST['formProductPrice'];
$prodDiscountPrice = $_POST['formProductDiscountPrice'];
$prodImageAltText = $_POST['formProductImageAltText'];

// Deal with image file
$imageFolderPath = "../../productImages/";

// Retrieve product's current image
$query = "SELECT * FROM products WHERE id=?";
$statement = $connexion->prepare($query);
$statement->bind_param("i", $prodId);
$statement->execute();
$result = $statement->get_result();
$product = $result->fetch_object('Product');
$dbImage = $product->image;

$tmpFileName = $_FILES['formProductImage']['tmp_name'];

// Handle new image upload
if (file_exists($tmpFileName) && is_uploaded_file($tmpFileName)) {
  // Remove old image unless it was default image
  if ($dbImage != 'blank.svg') {
    @unlink($imageFolderPath . $dbImage);
  }

  $uniqueName = sha1($prodName . time());
  $ogFileName = $_FILES['formProductImage']['name'];
  $extension = strchr($ogFileName, '.');

  @move_uploaded_file($tmpFileName, $imageFolderPath . $uniqueName . $extension);
  @unlink($tmpFileName);

  $dbImage = $uniqueName . $extension;
}
// Done with image file

try {
  $query = "UPDATE products SET name = ?, image = ?, imageAltText = ?, description = ?, price = ?, discountPrice = ? WHERE id=?";
  $statement = $connexion->prepare($query);
  $statement->bind_param("ssssddi", $prodName, $dbImage, $prodImageAltText, $prodDesc, $prodPrice, $prodDiscountPrice, $prodId);
  $success = $statement->execute();

  if ($success) {
    echo "Product updated successfully!!";
  } else {
    echo "(in else) Error while updating product!";
    http_response_code(400);
  }
} catch (Exception $e) {
  echo "(in catch) Error while updating product!";
  echo $e->getMessage();
  http_response_code(400);
}
