<?php
require_once("../../includes/configbd.inc.php");
// require_once("/serveur/models/product.class.php");


$requestBodyString = file_get_contents('php://input');

if ($requestBodyString) {
  $requestBody = json_decode($requestBodyString);

  $deleteIds = $requestBody->ids;

  if ($deleteIds) {
    $deleteIdsString = $deleteIds;
    // $query = "DELETE FROM products WHERE id IN ()";

    // $stmt = $connexion->prepare($query);
    // $stmt->bind_param('i', 1);
    echo json_encode($deleteIds);
  }
  echo json_encode($requestBody->nothing);
}
