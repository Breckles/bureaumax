<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BureauMax - Accueil</title>
  <link rel="icon" type="image/x-icon" href="./client/public/icones/logo_small.png">
  <link rel="stylesheet" href="./client/public/css/main.css">
  <link rel="stylesheet" href="./client/public/css/home_page.css">
  <link rel="stylesheet" href="./client/public/css/ui.css">
  <!-- <script src="./client/public/js/main.js" defer></script> -->
  <script src="./client/public/js/main.js" type="module"></script>
</head>

<body id="homePage">
  <div id="siteBackdrop" onclick="closeDialog()"></div>

  <?php
  define('ABSPATH', __DIR__);
  $DOMAINPATH = 'http://localhost:8080/bureaumax_partie_3';
  require_once(ABSPATH . '/serveur/models/user.class.php');
  require_once(ABSPATH . '/serveur/models/product.class.php');
  require_once(ABSPATH . '/serveur/scripts/products.php');

  session_start();
  include('serveur/includes/drawers/section_drawer.inc.php');
  include('serveur/includes/drawers/auth_drawer.inc.php');
  include('serveur/includes/drawers/help_drawer.inc.php');

  include('serveur/includes/header/header.inc.php');
  ?>

  <div class="bannerImageContainer">
    <img class="bannerImage" src="http://localhost:8080/bureaumax_partie_3/client/public/images/office_highlighters_large.jpg" alt="Un bureau avec des note d'entretien et des surligneurs dessus.">
  </div>

  <?php
  echo '<h2>Produits Vedettes</h2>';
  ?>

  <div id="homePageProductList">
    <ul id="productList"></ul>
  </div>
</body>

</html>