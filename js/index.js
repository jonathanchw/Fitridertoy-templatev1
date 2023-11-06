/*Add products to products section*/
const productsSection = document.getElementById("productData");
productsSection.innerHTML += productData
  .map((product) => {
    return `
    <div class="product-section product-section7 col-lg-4 col-12"
    data-product="${product.id}"
    data-prod-id="${product.id}"
    data-product-category="Gadgets"
    data-product-title="${product.name}"
    data-product-alias=""
    data-product-description="${product.description}"
    data-product-price="${(product.price).toFixed(2)}"
    data-product-shipping="${(product.shipping).toFixed(2)}"
    data-product-billmodel="1"
    data-product-MultiPrice="no"
    data-product-id="${product.id}"
    data-product-size-option="no"
    data-product-image-link="./config/data/img/${product.image}">


    <div class="product-block">
        <img class="prod_img7" src="../images/products/${product.image}">
        <div class="product-details">

            <!-- p class="prod_category7"> <span> One Time Sale </span> </p-->

            <h5 class="product-title product-name7">${product.name}</h5>
            <span class="prod-price">
                <p class="prod_price7">
                <span class=""> $${(product.price).toFixed(2)} </span></p>
            </span>

            <a onclick="javascript:void(0);" href="${product.href}" class="btn_shop btn_shop7">
                <button class="btn btn-primary btn-shop shop-btn-color">Buy It Now</button>
            </a>

        </div>
    </div>

</div>
    `;
  })
  .join("");
