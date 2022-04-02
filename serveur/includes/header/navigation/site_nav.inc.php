<nav id="siteNav" aria-label="Navigations du Site">
  <?php
  echo
  '<a id="navLogo" href="./index.php">
    <img src="client/public/icones/logo_small.png" />
  </a>';

  // Don't show help menu to admins
  if (!isset($_SESSION['usager']) || $_SESSION['usager'] == 'M') {
    echo
    '<button class="iconButton" type="button" onclick="openSideDrawer(\'helpDrawer\')" aria-label="Ouvrir le menu d\'aide">
      <img src="client/public/icones/help_icon.svg" />
    </button>';
  }

  echo
  '<button class="iconButton" type="button" onclick="openSideDrawer(\'authDrawer\')" aria-label="Ouvrir le menu de connexion">
    <img src="client/public/icones/user_icon.svg" />
  </button>';

  // Display proper login/logout action
  // if (!isset($_SESSION['usager'])) {
  //   echo '<a href="/client/pages/connexion.php">Connexion</a>';
  // } else {
  //   echo '<a href="/serveur/scripts/deconnecter.php">Déconnexion</a>';
  // }
  ?>
</nav>