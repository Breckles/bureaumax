<?php

session_start();
require_once("../../includes/configbd.inc.php");

$prodName = $_POST['formProductName'];
$prodDesc = $_POST['formProductDescription'];
$prodPrice = $_POST['formProductPrice'];
$prodDiscountPrice = $_POST['formProductDiscountPrice'];
$prodImageAltText = $_POST['formProductImageAltText'];

// Deal with image file
$imageFolderPath = "../../productImages/";

$dbImage = 'blank.svg';

$tmpFileName = $_FILES['formProductImage']['tmp_name'];

if (file_exists($tmpFileName) && is_uploaded_file($tmpFileName)) {
  $uniqueName = sha1($prodName . time());
  $ogFileName = $_FILES['formProductImage']['name'];
  $extension = strchr($ogFileName, '.');

  @move_uploaded_file($tmpFileName, $imageFolderPath . $uniqueName . $extension);
  @unlink($tmpFileName);

  $dbImage = $uniqueName . $extension;
}
// Done with image file

try {
  $query = "INSERT INTO products VALUES(0, ?, ?, ?, ?, ?, ?)";
  $statement = $connexion->prepare($query);
  $statement->bind_param("ssssdd", $prodName, $dbImage, $prodImageAltText, $prodDesc, $prodPrice, $prodDiscountPrice);
  $success = $statement->execute();

  if ($success) {
    $newId = $connexion->insert_id;
    echo "New product created!!";
  } else {
    echo "(in else) Error while creating new product!";
    http_response_code(400);
  }
} catch (Exception $e) {
  echo "(in catch) Error while creating new product!";
  http_response_code(400);
}

mysqli_close($connexion);
