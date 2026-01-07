// Food Menu
let menu = [
  { name: "Samosa", price: 15 },
  { name: "Vada Pav", price: 20 },
  { name: "Tea", price: 10 },
  { name: "Coffee", price: 15 },
  { name: "Sandwich", price: 40 },
  { name: "Pav Bhaji", price: 50 },
  { name: "Paneer Wrap", price: 60 },
  { name: "Cold Drink", price: 25 }
];

let cart = [];
let total = 0;

// Login function
function login() {
  const nameInput = document.getElementById("name").value;
  if (nameInput === "") {
    alert("Enter name");
    return;
  }
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("menuBox").style.display = "block";
  loadMenu();
}

// Load menu items
function loadMenu() {
  let menuDiv = document.getElementById("menu");
  menuDiv.innerHTML = "";
  menu.forEach(item => {
    menuDiv.innerHTML += `
      <div class="item">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
      </div>
    `;
  });
}

// Add to cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("cart").innerHTML += `<li>${name} - ₹${price}</li>`;
  document.getElementById("total").innerText = total;
}

// Place order and generate bill
function placeOrder() {
  document.getElementById("menuBox").style.display = "none";
  document.getElementById("billBox").style.display = "block";

  const nameValue = document.getElementById("name").value;
  const paymentValue = document.getElementById("payment").value;
  const isParcel = document.getElementById("parcel").checked ? "Yes" : "No";

  // Generate random bill number
  const billNumber = Math.floor(Math.random() * 9000) + 1000;

  let billHTML = `<p><strong>Bill No:</strong> ${billNumber}</p>`;
  billHTML += `<p><strong>Name:</strong> ${nameValue}</p>`;
  cart.forEach(item => {
    billHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });
  billHTML += `<h3>Total: ₹${total}</h3>`;
  billHTML += `<p><strong>Payment:</strong> ${paymentValue}</p>`;
  billHTML += `<p><strong>Parcel:</strong> ${isParcel}</p>`;

  document.getElementById("bill").innerHTML = billHTML;
}
