// Food Menu
const menu = [
  { name: "Samosa", price: 15, img: "61050397.avif" },
  { name: "Vada Pav", price: 20, img: "vada-pav-15.jpg" },
  { name: "Tea", price: 10, img: "tea-obsession.webp" },
  { name: "Coffee", price: 15, img: "espresso-feature--1200x900.webp" },
  { name: "Sandwich", price: 40, img: "sandwitch-chennai-fast-food-delivery-services-44jx9vznst.avif" },
  { name: "Pav Bhaji", price: 50, img: "YFL-Pav-Bhaji-3.webp" },
  { name: "Paneer Wrap", price: 60, img: "Paneer-kathi-Roll-Featured-1.jpg" },
  { name: "Cold Drink", price: 25, img: "Plain_Cold_Drink.jpg" }
];

let cart = [];
let total = 0;

// Load menu
function loadMenu() {
  const menuDiv = document.getElementById("menu");
  menuDiv.innerHTML = "";

  menu.forEach(item => {
    menuDiv.innerHTML += `
      <div class="item">
        <img src="${item.img}" width="120">
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

// Handle payment
function handlePayment() {
  const payment = document.getElementById("payment").value;

  if (payment === "UPI") {
    document.getElementById("menuBox").style.display = "none";
    document.getElementById("qrBox").style.display = "block";
  } else {
    placeOrder("Cash");
  }
}

// Confirm UPI payment
function confirmUPIPayment() {
  placeOrder("UPI");
}

// Generate bill
function placeOrder(paymentType) {
  document.getElementById("qrBox").style.display = "none";
  document.getElementById("menuBox").style.display = "none";
  document.getElementById("billBox").style.display = "block";

  const isParcel = document.getElementById("parcel").checked ? "Yes" : "No";
  const billNumber = Math.floor(1000 + Math.random() * 9000);

  let billHTML = `<p><strong>Bill No:</strong> ${billNumber}</p>`;

  cart.forEach(item => {
    billHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });

  billHTML += `
    <h3>Total: ₹${total}</h3>
    <p><strong>Payment:</strong> ${paymentType}</p>
    <p><strong>Parcel:</strong> ${isParcel}</p>
    <p style="color:green;"><strong>Order Successful ✅</strong></p>
  `;

  document.getElementById("bill").innerHTML = billHTML;
}

// Load menu when page opens
loadMenu();
