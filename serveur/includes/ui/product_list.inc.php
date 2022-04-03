<ul class="productList">
  <?php

  foreach ($products as &$product) {
    echo '<li class="productListItem"><a href="#">';
    include(ABSPATH . '/serveur/includes/ui/product_card.inc.php');
    echo '</a></li>';
  }
  ?>
</ul>