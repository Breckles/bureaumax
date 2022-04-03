<nav id="sectionNavMenu" aria-label="Navigation des Sections">
  <?php
  if (isset($_SESSION['usager']) && $_SESSION['usager'] == 'A') {
    // Admin sections
    echo
    '<ul>
      <li><a href="#">Admin</a></li>
      <li><a href="#">Gérer films</a></li>
      <li><a href="#">Gérer membres</a></li>
    </ul>';
  } else {
    // User sections
    echo
    '<ul>
      <li><a href="#">Fournitures de bureau</a></li>
      <li><a href="#">Fournitures de classe</a></li>
      <li><a href="#">Autres</a></li>
      <li><a href="#">Toutes</a></li>
    </ul>';
  }
  ?>
</nav>