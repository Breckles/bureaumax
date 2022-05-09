<nav id="siteNav" aria-label="Navigations du Site">
  <?php
  echo
  "<a id='navLogoSmall' href=$DOMAINPATH>
    <img src=$DOMAINPATH/client/public/icones/logo_small.png>
  </a>";

  echo
  "<a id='navLogoLarge' href=$DOMAINPATH>
    <img src=$DOMAINPATH/client/public/icones/logo.svg>
  </a>";

  // Don't show help menu to admins
  if (!isset($_SESSION['usager'])) {
    echo
    "<button class='iconButton' type='button' onclick='openDialog(`helpDrawer`)' aria-label='Ouvrir le menu d\'aide'>
      <img src=$DOMAINPATH/client/public/icones/help_icon.svg />
    </button>";
  } else if ($_SESSION['usager']->role === 'M') {
    include(ABSPATH . '/serveur/includes/ui/cart_icon_with_badge.php');
    echo
    "<button class='iconButton' type='button' onclick='openDialog(`helpDrawer`)' aria-label='Ouvrir le menu d\'aide'>
      <img src=$DOMAINPATH/client/public/icones/help_icon.svg />
    </button>";
  }

  echo
  "<button class='iconButton' type='button' onclick='openDialog(`authDrawer`)' aria-label='Ouvrir le menu de connexion'>
    <img src=$DOMAINPATH/client/public/icones/user_icon.svg />
  </button>";
  ?>
</nav>