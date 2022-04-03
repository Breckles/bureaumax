<div class="productCard">
  <?php
  echo "<img src='$product->imagePath' alt='$product->imageAltText'>";
  echo "<h3>$product->name</h3>";
  echo "<p>$product->cardDescription</p>";
  echo "<p>$$product->price</p>";
  ?>
</div>