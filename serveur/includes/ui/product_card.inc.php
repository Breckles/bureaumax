<div class="productCard">
  <?php
  echo
  "<img src='$product->imagePath' alt='$product->imageAltText'>
    <div class='productCardContent'>
    <h3>$product->name</h3>
    <p class='productCardDescription'>$product->cardDescription</p>
    <p class='productCardPrice'>$$product->price</p>
    </div>";
  ?>
</div>