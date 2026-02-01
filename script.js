const items = [
  { name: "Laptop", price: 60000, rating: 4.5, category: "Electronics" },
  { name: "Phone", price: 30000, rating: 4.6, category: "Electronics" },
  { name: "Headphones", price: 2000, rating: 4.2, category: "Electronics" },
  { name: "Keyboard", price: 1500, rating: 4.0, category: "Electronics" },
  { name: "Mouse", price: 800, rating: 4.1, category: "Electronics" },

  { name: "T-Shirt", price: 700, rating: 4.0, category: "Clothing" },
  { name: "Jeans", price: 1500, rating: 4.3, category: "Clothing" },
  { name: "Jacket", price: 3000, rating: 4.4, category: "Clothing" },
  { name: "Shoes", price: 2500, rating: 4.2, category: "Clothing" },
  { name: "Cap", price: 400, rating: 3.9, category: "Clothing" },

  { name: "Novel", price: 500, rating: 4.6, category: "Books" },
  { name: "Comics", price: 300, rating: 4.1, category: "Books" },
  { name: "Textbook", price: 1200, rating: 4.5, category: "Books" },
  { name: "Notebook", price: 200, rating: 4.0, category: "Books" },
  { name: "Biography", price: 600, rating: 4.3, category: "Books" }
];

const list = document.getElementById("productList");
const catSelect = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortOption");

function showProducts(arr) {
  list.innerHTML = "";

  arr.forEach(p => {
    const box = document.createElement("div");
    box.className = "product";
    box.innerHTML = `
      <strong>${p.name}</strong><br>
      Category: ${p.category}<br>
      Price: ₹${p.price}<br>
      Rating: ${p.rating}
    `;
    list.appendChild(box);
  });
}

function updateProducts() {
  let result = items.slice();

  if (catSelect.value !== "all") {
    result = result.filter(i => i.category === catSelect.value);
  }

  switch (sortSelect.value) {
    case "priceAsc": result.sort((a, b) => a.price - b.price); break;
    case "priceDesc": result.sort((a, b) => b.price - a.price); break;
    case "nameAsc": result.sort((a, b) => a.name.localeCompare(b.name)); break;
    case "nameDesc": result.sort((a, b) => b.name.localeCompare(a.name)); break;
    case "ratingAsc": result.sort((a, b) => a.rating - b.rating); break;
    case "ratingDesc": result.sort((a, b) => b.rating - a.rating); break;
  }

  showProducts(result);
}

catSelect.onchange = updateProducts;
sortSelect.onchange = updateProducts;

updateProducts();

