let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartDiv = document.getElementById("cart");
let cartItemsList = document.getElementById("cartItemsList"); 
let cartFooter = document.getElementById("cartFooter");

let products = [
  //SHOES
  { id: 1, name: "Simple Shoes", price: 999, image: "images/shoe.jpg", category: "shoes" },
  { id: 2, name: "Athleisure Shoes for Women", price: 1099, image: "images/shoe1.webp", category: "shoes" },
  { id: 3, name: "Brown Embroidered Shoes", price: 1599, image: "images/shoe2.avif", category: "shoes" },
  { id: 4, name: "Casual Shoes", price: 1299, image: "images/shoe3.webp", category: "shoes" },
  { id: 5, name: "Grey Trainer", price: 1159, image: "images/shoe4.webp", category: "shoes" },
  { id: 6, name: "Panel Shoes", price: 1359, image: "images/shoe5.webp", category: "shoes" },
  { id: 7, name: "Formal Shoes", price: 1999, image: "images/shoe6.webp", category: "shoes" },
  { id: 8, name: "Redtape Sneakers", price: 1499, image: "images/shoe7.avif", category: "shoes" },


  //WATCHES
  { id: 9, name: "Watch", price: 599, image: "images/watch.jpg", category:"watch" },
  { id:10, name:"Men Women Sport LED watch", price:999, image:"images/watch1.jpeg", category:"watch"},
  { id:11, name:"Shocknshop Leather Analogue Unisex Watch", price:2999, image:"images/watch2.jpg", category:"watch"},
  { id:12, name:"Shop Joker & Witch Adam & Anne Couple Watch", price:2899, image:"images/watch3.webp", category:"watch"},
  { id:13, name:"Buy Franklord Romeo and juliet couple Watch Series", price:3999, image:"images/watch4.jpg", category:"watch"},
  { id:14, name:"Classic Digital Waterproof Sports Watch", price:2599, image:"images/watch5.jpg", category:"watch"},
  { id:41, name:"Dogital LED Sport Watch for Men, Women & Boys", price:1599, image:"images/watch6.webp", category:"watch"},

  //doll

  { id:15, name:"doll", price:399, image: "images/doll.jpg", category:"doll"},
  { id:16, name:"Beautiful family Doll with", price:1299, image:"images/doll1.webp", category:"doll"},
  { id:17, name:"Baby doll", price:2899, image:"images/doll2.avif", category:"doll"},
  { id:18, name:"Cute Teddy Bear", price:1500, image:"images/doll3.jpg", category:"doll"},
  { id:19, name:"Doll teddy bear", price:1399, image:"images/doll4.jpg", category:"doll"},
  { id:20, name:"Sweater-Teddy-Bear-Doll-Stuffed-Bear", price:2299, image:"images/doll5.avif", category:"doll"},

  //Fan
  { id:21, name: "fan", price:299, image: "images/fan.jpg", category:"fan"},
  { id:22, name: "desktop-electric-fan", price:999, image: "images/fan1.jpg", category:"fan"},
  { id:23, name: "COSTOO Dekstop fan Silent Mini Fan", price:1299, image: "images/fan2.jpg", category:"fan"},
  { id:24, name: "New Breeze high Speed Small Ceiling fan", price:2299, image: "images/fan3.webp", category:"fan"},
  { id:25, name: "Ceiling Fan", price:2199, image: "images/fan4.webp", category:"fan"},

  //Grinder
  { id:26, name: "Butterfly Arrow 500 W Juicer Mixer Grinder", price:3299, image: "images/grinder.webp", category:"grinder"},
  { id:27, name: "Flipkart SmartBuy Redzo 500 W Juicer Mixer grinder", price:3000, image: "images/grinder1.webp", category:"grinder"},
  { id:28, name: "Crompton DS 500 w Mixer grinder", price:2999, image: "images/grinder2.webp", category:"grinder"},
  { id:29, name: "BOSCH TrueMixx pro 1100 W Juicer Mixer Grinder", price:3999, image: "images/grinder3.webp", category:"grinder"},
  { id:30, name: "ACTIVA Easy Mix nutri 2 jar Juice Mixer", price:4299, image: "images/grinder4.webp", category:"grinder"},
  { id:31, name: "Crompton DS 500 Blend 500 W Mixer Grinder", price:5799, image: "images/grinder5.webp", category:"grinder"},
  { id:32, name: "Longway Super Dlx 750 W Juicer Mixer Grinder", price:4389, image: "images/grinder6.webp", category:"grinder"},
  { id:33, name: "Grinder - Bostton 750 Watt", price:4200, image: "images/grinder7.webp", category:"grinder"},
  { id:34, name: "BOSCH Pro 1000 W Mixer Grinder", price:5999, image: "images/grinder8.webp", category:"grinder"},

  //T-shirts
  { id:35, name: "T-shirt", price:360, image: "images/t-shirt.jpg", category:"tshirt"},
  { id:36, name: "Love Design round neck White tshirt for men and Women", price:199, image: "images/t-shirt1.webp", category:"tshirt"},
  { id:37, name: "Think Run Fast Motivational T-Shirt", price:210, image: "images/t-shirt2.webp", category:"tshirt"},
  { id:38, name: "Funny T-shirt Just do Nothing", price:229, image: "images/t-shirt3.webp", category:"tshirt"},
  { id:39, name: "Funny tshirt for Men and Women", price:239, image: "images/t-shirt4.avif", category:"tshirt"},
  { id:40, name: "Just Cure It Long Sleeve T-Shirt", price:319, image: "images/t-shirt5.png", category:"tshirt"},
];


let searchInput = document.querySelector(".search-input");


// SELECT ELEMENTS
let productList = document.getElementById("productList");
let cartCount = document.querySelector(".cart-count");
let cartBtn = document.querySelector(".cart-btn");

// SHOW PRODUCTS
function displayProducts(filteredProducts = products) {
  productList.innerHTML = "";

  filteredProducts.forEach(product => {
    let div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button>Add to Cart</button>
    `;

    // ADD BUTTON EVENT
    div.querySelector("button").addEventListener("click", () => {
      addToCart(product.id);
    });

    productList.appendChild(div);
  });
}

// ADD TO CART
function addToCart(id) {
  let item = cart.find(p => p.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  updateCart();
}

// UPDATE CART UI
function updateCart() {
  cartItemsList.innerHTML = ""; 
  cartFooter.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
  <div style="text-align: center; margin-top: 50px; color: #888;">
    <div style="font-size: 50px;">🛒</div>
    <p>Your ShopEase cart is empty</p>
  </div> `;
  } else {
    cart.forEach(item => {
    let product = products.find(p => p.id === item.id);
    total += product.price * item.quantity;
    
    let div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
    <img src="${product.image}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">
  <span style="font-size: 13px; margin-left: 8px;">${product.name}</span>

  <div>
    <button onclick="decreaseQty(${item.id})">－</button>

    <small>${item.quantity}</small>

    <button onclick="increaseQty(${item.id})">＋</button>
  </div>

  <strong style="font-size: 14px;">₹${product.price * item.quantity}</strong>

  <button onclick="removeItem(${item.id})" style="border:none; background:none; cursor:pointer;">🗑️</button>
    `;

    cartItemsList.appendChild(div);
  });

  // TOTAL
  let totalDiv = document.createElement("h3");
  totalDiv.innerText = "Total: ₹" + total;
  cartFooter.appendChild(totalDiv);

  //
  let clearBtn = document.createElement("button");
    clearBtn.innerText = "Clear Cart";
    clearBtn.classList.add("clear-btn");
    clearBtn.onclick = clearCart;
    cartFooter.appendChild(clearBtn);
  }

  // UPDATE COUNT
  cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);

//save here
  localStorage.setItem("cart", JSON.stringify(cart));
}

// INCREASE
function increaseQty(id) {
  let item = cart.find(p => p.id === id);
  item.quantity++;
  updateCart();
}

// DECREASE
function decreaseQty(id) {
  let item = cart.find(p => p.id === id);

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    removeItem(id);
  }

  updateCart();
}

// REMOVE
function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// TOGGLE CART DRAWER
cartBtn.addEventListener("click", () => {
  cartDiv.classList.toggle("open");
});

//add search logic
searchInput.addEventListener("input", () => {
  let value = searchInput.value.toLowerCase();

  let filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

//add filter function
function filterCategory(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

//
function clearCart() {
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = []; // Empty the array
    localStorage.removeItem("cart"); // Wipe the storage
    updateCart(); // Refresh the UI

    cartDiv.classList.remove("open");
  }
}
function toggleCart() {
    
        cartDiv.classList.toggle("open");
    }

// INIT
displayProducts();
updateCart();
