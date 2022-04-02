<?php
    session_start();
    require_once("../includes/configbd.inc.php");

    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $courriel = $_POST['courriel'];
    $pass = $_POST['pass'];

    $requete = "INSERT INTO membres VAlUES (0,?,?,?)";
    $stmt = $connexion->prepare($requete);
    $stmt->bind_param("sss", $prenom,$nom,$courriel);
    $stmt->execute();
    $idm = $connexion->insert_id;

    $requete = "INSERT INTO connexion VAlUES ($idm,?,?,'1','M')";
    $stmt = $connexion->prepare($requete);
    $stmt->bind_param("ss", $courriel,$pass);
    $stmt->execute();
    $tab['msg']="Membre bien enregistré";
    mysqli_close($connexion);
    header('Location:../../accueil.php');
    exit;
?>


