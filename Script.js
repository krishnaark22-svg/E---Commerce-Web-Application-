const API = "http://localhost:5000/api/products";

let cart = [];

async function loadProducts() {
  const res = await fetch(API);
  const products = await res.json();

  const div = document.getElementById("products");
  div.innerHTML = "";

  products.forEach(p => {
    div.innerHTML += `
      <div>
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
      </div>
    `;
  });
}

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById("cart");
  cartEl.innerHTML = "";

  cart.forEach(item => {
    cartEl.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
  });
}

async function checkout() {
  await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ cart })
  });

  alert("Order placed!");
  cart = [];
  renderCart();
}

loadProducts();
