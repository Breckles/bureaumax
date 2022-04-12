<?php
require_once("../includes/configbd.inc.php");
require_once("../models/user.class.php");
require_once("../models/product.class.php");

function getUser($idm)
{
  global $connexion;

  $query = "SELECT * FROM membres WHERE idm = ?";
  $stmt = $connexion->prepare($query);
  $stmt->bind_param('i', $idm);
  $stmt->execute();
  $result = $stmt->get_result();

  $user = $result->fetch_object('User');

  return $user;
}
