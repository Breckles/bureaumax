<?php
session_start();
require_once("../includes/configbd.inc.php");

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
  if ($ligne->role == "M") {
    $_SESSION['usager'] = "M";
    header('Location: ../../client/pages/membre.php');
    exit; //Le placer toujours après un header('Location: ....)
  } else  if ($ligne->role == "A") {
    $_SESSION['usager'] = "A";
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
