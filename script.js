let products = [
  {
    id: 1,
    name: "Product A",
    price: 100,
    rating: 4,
    farmer: "Farmer 1",
    description: "Fresh and organic",
    imageUrl: "img1.jpg",
  },
  {
    id: 2,
    name: "Product B",
    price: 200,
    rating: 5,
    farmer: "Farmer 2",
    description: "Handmade craft",
    imageUrl: "img2.jpg",
  },
  // Add more products as needed
];

function performSearch() {
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();

  // Filter products by search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  // Display the search results page and populate it
  document.getElementById("searchResults").classList.remove("hidden");
  displayProducts(filteredProducts);
}

function applyFilters() {
    const priceFilter = document.getElementById("priceFilter").value;
    const reviewFilter = document.getElementById("reviewFilter").value;
    let filteredProducts = [...products];

    if (priceFilter === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (reviewFilter === "4star") {
        filteredProducts = filteredProducts.filter(
        (product) => product.rating >= 4
        );
    } else if (reviewFilter === "3star") {
        filteredProducts = filteredProducts.filter(
        (product) => product.rating >= 3
        );
    }

    displayProducts(filteredProducts);
}

function displayProducts(productList) {
  const productListElement = document.getElementById("productList");
  productListElement.innerHTML = ""; // Clear previous results
  productList.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "product-item";
    productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.rating} stars</p>
            <p>Farmer: ${product.farmer}</p>
            <button onclick="openCartModal()">Add to Cart</button>
        `;
    productListElement.appendChild(productItem);
  });
}

function openCartModal() {
  document.getElementById("cartModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("cartModal").style.display = "none";
}

function placeOrder() {
  alert("Order placed successfully!");
  closeModal();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchResults").classList.add("hidden"); // Hide on page load
});
