var cartData = [];
var subTotal = 0;

function updateCartData() {
  if ("cart-data" in localStorage) {
    let existingItems = JSON.parse(localStorage.getItem("cart-data"));
    if (!Array.isArray(existingItems)) {
      cartData = [existingItems];
    } else {
      cartData = existingItems;
    }
  }
}
function updateSubTotal() {
  subTotal = 0;
  cartData.forEach((prd) => {
    subTotal += prd.price * prd.quantity;
  });
  subTotal = Math.round(subTotal * 100) / 100;
  localStorage.setItem("cart-subtotal", subTotal);

  let totalLabel = document.getElementById("cart-subtotal");
  totalLabel.innerText = `$${subTotal}`;
  document.getElementById("cart-total").innerText = `$${subTotal}`;
}

function addToCart(id) {
  updateCartData();

  let product = productData.find((obj) => obj.id === id);
    if (!product) {
    alert("Product not found");
    return;
  }

  let itemExists = cartData.find((prd) => prd.id === id);
  if (!itemExists) {
    product.quantity = 1;
    cartData.push(product);
    localStorage.setItem("cart-data", JSON.stringify(cartData));
  } else {
    console.log("Already added");
  }
}

function removeFromCart(id) {
  let itemIndex = cartData.findIndex((prd) => prd.id === id);
  if (itemIndex === -1) {
    return;
  } else {
    cartData.splice(itemIndex, 1);
    localStorage.setItem("cart-data", JSON.stringify(cartData));
    let cartTable = document.getElementById("cart-table");
    cartTable.querySelector(`#product-id-${id}`).remove();

    updateSubTotal();
  }
}

function handleCartItems() {
  let cartTable = document.getElementById("cart-table");
  cartTable.innerHTML += cartData
    .map(({ id, name, imgSrc, price, quantity }) => {
      return `
      <tr id="product-id-${id}" class="data_row product">
      <td>
        <span class="imger">
          <img
            src="${imgSrc}"
            class="img-fluid"
            alt="products"
          />
        </span>
      </td>
      <td>
        <p><strong> ${name}</strong></p>
      </td>
      <td class="product-price">$${price}</td>
      <!-- * Please Not Add $ symbol -->
      <td class="product-quantity">
        <input type="number" name="qty" value="${quantity}" min="1" onchange="handleQuantityInput(this, ${id})" />
        <input
          type="hidden"
          name="product"
          value="Mini Drone"
        />
        <!-- * Product Name -->

        <input type="hidden" name="price" value="${price}" />
        <!-- * Product Price -->
      </td>
      <td class="product-line-price">$${price}</td>
      <td class="product-removal">
        <button
          type="button"
          class="btn btn-secondary btn-sm remove-product"
          onclick="removeFromCart(${id})"
        >
          <i class="bi bi-trash3"></i>
        </button>
      </td>
    </tr>
      

      `;
    })
    .join("");
}

function handleQuantityInput(e, id) {
  if (e.value === "" || e.value < 1) {
    e.value = 1;
  }
  let productIndex = cartData.findIndex((prd) => prd.id === id);
  cartData[productIndex].quantity = e.value;
  localStorage.setItem("cart-data", JSON.stringify(cartData));

  updateSubTotal();
}

function removeAllItems() {
  cartData.forEach((prd) => {
    let product_El = document.getElementById(`product-id-${prd.id}`);
    product_El.remove();
  });
  cartData = [];
  localStorage.removeItem("cart-data");
  updateSubTotal();
}

updateCartData();
updateSubTotal();
handleCartItems();
