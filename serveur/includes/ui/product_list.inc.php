<ul id="productList">
  <?php

  foreach ($products as $product) {
    // echo "<button type='button' onclick='addToCart($product)'>add product </button>";
    echo
    '<li class="productListItem">
    <a href="#">';
    include(ABSPATH . '/serveur/includes/ui/product_card.inc.php');
    echo
    '</a>
    </li>';
  }
  ?>
</ul>