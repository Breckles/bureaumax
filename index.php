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
  <script src="./client/public/js/main.js" defer></script>
</head>

<body id="homePage">
  <div id="siteBackdrop" onclick="closeSideDrawer()"></div>

  <?php
  define('ABSPATH', __DIR__);
  $DOMAINPATH = 'http://localhost:8080/sym_bureaumax_partie_1';
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
    <img class="bannerImage" src="http://localhost:8080/sym_bureaumax_partie_1/client/public/images/office_highlighters_large.jpg" alt="Un bureau avec des note d'entretien et des surligneurs dessus.">
  </div>

  <?php
  // $products = [
  //   (object) [
  //     'id' => '1',
  //     'name' => 'Brother - Cartouche de toner noir TN221BK rendement standard',
  //     'image' => "$DOMAINPATH" . '/client/public/images/toner.webp',
  //     'imageAltText' => 'Une explosion de couleur... dans ta face.',
  //     'productDescription' => 'Une explosion de couleur... dans ta face.',
  //     'price' => 123.99,
  //     'discountPrice' => 109.99
  //   ],
  //   (object) [
  //     'id' => '2',
  //     'name' => 'Apple AirPods - 3e génération',
  //     'image' => "$DOMAINPATH" . '/client/public/images/pods.webp',
  //     'imageAltText' => '2 petits extra-terrestres dans une boite chic.',
  //     'productDescription' => '2 petits extra-terrestres dans une boite chic.',
  //     'price' => 239.99,
  //     'discountPrice' => 199.99
  //   ],
  //   (object) [
  //     'id' => '3',
  //     'name' => 'BIC - Stylos à bille Round Stic ronds, pointe moyenne, 1,0 mm, bleu, paq./60',
  //     'image' => "$DOMAINPATH" . '/client/public/images/bics.webp',
  //     'imageAltText' => 'Extra valeur. C\'est ecrit sur la boite.',
  //     'productDescription' => 'Extra valeur. C\'est ecrit sur la boite.',
  //     'price' => 7.49,
  //     'discountPrice' => 3.49
  //   ],
  //   (object) [
  //     'id' => '4',
  //     'name' => 'Omega II - Casque dur, ajustement à coulisse latérale, homologué CSA Type 1, classe E, ANSI Type I, jaune',
  //     'image' => "$DOMAINPATH" . '/client/public/images/casque.webp',
  //     'imageAltText' => 'Pour le developpement web dangereux.',
  //     'productDescription' => 'Pour le developpement web dangereux.',
  //     'price' => 27.99
  //   ],
  //   (object) [
  //     'id' => '5',
  //     'name' => 'Seagate - Disque dur externe USB 3.2 Gen 1 de 2 To One touch - Rouge',
  //     'image' => "$DOMAINPATH" . '/client/public/images/seagate.webp',
  //     'imageAltText' => 'Ca en fait, d\'la porno.',
  //     'productDescription' => 'Ca en fait, d\'la porno.',
  //     'price' => 89.99
  //   ],
  //   (object) [
  //     'id' => '6',
  //     'name' => 'CoastWide Professional - Papier Hygiénique Géant à 2 Épaisseurs - Paquet de 6',
  //     'image' => "$DOMAINPATH" . '/client/public/images/tp.webp',
  //     'imageAltText' => 'Il en manque toujours.',
  //     'productDescription' => 'Il en manque toujours.',
  //     'price' => 26.99
  //   ]
  // ];
  $products = getProducts();
  echo '<h2>Produits Vedettes</h2>';
  ?>

  <div id="homePageProductList">
    <?php
    include(ABSPATH . '/serveur/includes/ui/product_list.inc.php')
    ?>
  </div>
</body>

</html>