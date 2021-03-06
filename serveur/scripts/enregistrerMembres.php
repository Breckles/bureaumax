<?php
session_start();
require_once("../includes/configbd.inc.php");
require_once("./dbService.php");

$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$courriel = $_POST['courriel'];
$pass = $_POST['pass'];

// Optional queryParams
$gender = isset($_POST['sexe']) && !empty($_POST['sexe']) ? $_POST['sexe'] : null;
$dob = isset($_POST['datenaissance']) && !empty($_POST['datenaissance']) ? $_POST['datenaissance'] : null;


$requete = "INSERT INTO membres VAlUES (0,?,?,?,?,?)";
$stmt = $connexion->prepare($requete);
$stmt->bind_param("sssss", $nom, $prenom, $courriel, $gender, $dob);
$stmt->execute();
$idm = $connexion->insert_id;

$requete = "INSERT INTO connexion VAlUES ($idm,?,?,'M','A')";
$stmt = $connexion->prepare($requete);
$stmt->bind_param("ss", $courriel, $pass);
$stmt->execute();
$tab['msg'] = "Membre bien enregistrĂ©";

// $user = new User($idm, $prenom, $nom, $courriel, $dob, $gender, 'M');

$user = (object) array(
  "idm" => $idm,
  "prenom" => $prenom,
  "nom" => $nom,
  "courriel" => $courriel,
  "dob" => $dob,
  "gender" => $gender,
  "role" => 'M',
);

$_SESSION['usager'] = $user;

mysqli_close($connexion);
header("Location: ../../index.php");
exit;
