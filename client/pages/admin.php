<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BureauMax - Admin</title>
  <link rel="icon" type="image/x-icon" href="../public/icones/logo_small.png">
  <link rel="stylesheet" href="../public/css/main.css">
  <link rel="stylesheet" href="../public/css/admin_page.css">
  <!-- <script src="../public/js/main.js" type="module"></script> -->
  <script src="../public/js/admin.js" type="module"></script>
</head>

<body>

  <?php
  define('ABSPATH', dirname(__DIR__, 2));
  require_once(ABSPATH . '/serveur/models/user.class.php');
  $DOMAINPATH = 'http://localhost:8080/sym_bureaumax_partie_1';
  // $DOMAINPATH = 'http://192.168.2.16:8080/sym_bureaumax_partie_1';
  session_start();

  if (!isset($_SESSION['usager']) || $_SESSION['usager']->role === 'M') {
    header('Location: ../../index.php');
    exit; //Le placer toujours après un header('Location: ....)
  }

  include(ABSPATH . '/serveur/includes/header/header.inc.php');
  include(ABSPATH . '/serveur/includes/drawers/section_drawer.inc.php');
  include(ABSPATH . '/serveur/includes/drawers/auth_drawer.inc.php');
  ?>

  <div id="siteBackdrop" onclick="closeDialog()"></div>

  <div id="adminProductsTableContainer"></div>

</body>

</html>