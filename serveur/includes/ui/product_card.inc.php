<div class="productCard">
  <?php
  echo
  "<img src='$DOMAINPATH/client/public/images/$product->image' alt='$product->imageAltText'>
    <div class='productCardContent'>
      <h3>$product->name</h3>
      <p class='productCardDescription'>$product->description</p>
      <div class='productCardPriceContainer'>";

  if (isset($product->discountPrice)) {
    echo
    "<div class='productCardDiscountPrice'>$$product->discountPrice</div>  
        <div class='productRegularPrice'>$$product->price</div>
        ";
  } else {
    echo "<div class='productCardPrice'>$$product->price</div>";
  }

  echo
  "</div>    
    </div>";
  ?>
</div>