<?php
session_start();
require_once("../includes/configbd.inc.php");
require_once("./dbService.php");

$courriel = $_POST['courrielc'];
$pass = $_POST['passc'];

$requete = "SELECT * FROM connexion WHERE courriel = ? AND pass = ?";
$stmt = $connexion->prepare($requete);
$stmt->bind_param("ss", $courriel, $pass);
$stmt->execute();
$result = $stmt->get_result();

if (!$ligne = $result->fetch_object()) { //Si pas trouvé
  echo "SVP vérifiez vos paramètres de connexion ";
  mysqli_close($connexion);
  exit;
}
if ($ligne->statut == "A") {
  $user = getUser($ligne->idm);
  $user->role = $ligne->role;
  $_SESSION['usager'] = $user;
  if ($user->role == "A") {
    // $_SESSION['usager'] = "A";
    header('Location: ../../client/pages/admin.php');
    exit; //Le placer toujours après un header('Location: ....)
  }
  header('Location: ../../index.php');
  exit; //Le placer toujours après un header('Location: ....)
} else {
  echo "Problème avec votre compte. Contactez l'administrateur";
  // header('Location: ../../index.php');
  exit;
}
