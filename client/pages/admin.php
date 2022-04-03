<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BureauMax - Admin</title>
  <link rel="icon" type="image/x-icon" href="../public/icones/logo_small.png">
  <link rel="stylesheet" href="../public/css/main.css">
  <script src="../public/js/main.js" defer></script>
</head>

<body>

  <?php
  session_start();
  define('ABSPATH', dirname(__DIR__, 2));
  $DOMAINPATH = 'http://localhost:8080/sym_bureaumax_partie_1';
  include(ABSPATH . '/serveur/includes/header/header.inc.php');
  include(ABSPATH . '/serveur/includes/drawers/section_drawer.inc.php');
  include(ABSPATH . '/serveur/includes/drawers/auth_drawer.inc.php');
  ?>

  <div id="siteBackdrop" onclick="closeSideDrawer()"></div>

  <h1>Bonjour, Administrateur!</h1>

</body>

</html>