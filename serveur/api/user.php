<?php
require_once('../includes/configbd.inc.php');
require_once('../models/user.class.php');
session_start();

$user = isset($_SESSION['usager']) ? $_SESSION['usager'] : null;
// $response = (object)array("user" => $user);

echo json_encode($user);
