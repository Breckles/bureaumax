<?php
define("SERVEUR", "localhost");
define("USAGER", "user1");
define("PASSE", "mysql");
define("BD", "bdboutique");
$connexion = new mysqli(SERVEUR, USAGER, PASSE, BD);
if ($connexion->connect_errno) {
  echo "Probleme de connexion au serveur de bd";
  exit();
}
