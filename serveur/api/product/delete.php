<?php
require_once("../../includes/configbd.inc.php");
require_once("../../models/product.class.php");
$imageFolderPath = "../../productImages/";

$idsParam = $_POST['ids'];

if ($idsParam) {

  $idsArray = json_decode($idsParam);
  $dbIds = implode(', ', $idsArray);


  // Retrieve products' current images
  $query = "SELECT * FROM products WHERE id IN ($dbIds)";
  $statement = $connexion->prepare($query);
  $statement->execute();
  $result = $statement->get_result();

  // Delete images
  $product = $result->fetch_object('Product');
  while ($product != null) {
    $image = $product->image;

    if ($image != 'blank.svg') {
      @unlink($imageFolderPath . $image);
    }

    $product = $result->fetch_object('Product');
  }

  // Delete records from table
  $query = "DELETE FROM products WHERE id IN ($dbIds)";

  $stmt = $connexion->prepare($query);
  $success = $stmt->execute();
} else {
  echo "No ids sent with request.";
  http_response_code(400);
}

mysqli_close($connexion);
