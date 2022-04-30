<nav id="sectionNavMenu" aria-label="Navigation des Sections">
  <?php

  if (isset($_SESSION['usager']) && $_SESSION['usager']->role == 'A') {
    // Admin sections
    echo
    "<ul>
      <li><a href='$DOMAINPATH/client/pages/admin.php'>Admin</a></li>
      <li><a href='#'>Gérer produits</a></li>
      <li><a href='#'>Gérer membres</a></li>
    </ul>";
  } else {
    // User sections
    echo
    "<ul>
      <li><a href='#'>Fournitures de bureau</a></li>
      <li><a href='#'>Fournitures de classe</a></li>
      <li><a href='#'>Autres</a></li>
      <li><a href='#'>Toutes</a></li>
    </ul>";
  }
  ?>
</nav>