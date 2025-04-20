const products = [
  {
    id: 1,
    name: "গরুর মাংস",
    description: "Top-rated product with excellent performance.",
    rating: 3,
    reviews: 5,
    quantity: "1kg",
    price: 840,
    image: "Images/meatBeaf.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 2,
    name: "গরুর হাড্ডি+মাংস",
    description: "Top-rated product with excellent performance.",
    rating: 1,
    reviews: 5,
    quantity: "1kg",
    price: 759,
    image: "Images/beafBone.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 11,
    name: "গরুর কলিজা",
    description: "Top-rated product with excellent performance.",
    rating: 4,
    reviews: 10,
    quantity: "1.4kg",
    price: 519,
    image: "Images/beefLiver.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 10,
    name: "কলিজা",
    description: "Top-rated product with excellent performance.",
    rating: 2,
    reviews: 7,
    quantity: "1.4kg",
    price: 379,
    image: "Images/boneless.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
];

// Function to update location filter dynamically
function updateLocationFilter() {
  const locationFilter = document.getElementById("locationFilter");
  if (!locationFilter) {
    const filterOptions = document.querySelector(".filter-options");
    const locationFilterHtml = `
      <select id="locationFilter">
        <option value="all">সব জায়গা</option>
        ${getUniqueLocations()
          .map((location) => `<option value="${location}">${location}</option>`)
          .join("")}
      </select>
    `;
    filterOptions.insertAdjacentHTML("beforeend", locationFilterHtml);

    // Add event listener to the newly created location filter
    document
      .getElementById("locationFilter")
      .addEventListener("change", filterAndSortProducts);
  }
}

// Get unique locations from all products
function getUniqueLocations() {
  const allLocations = products.flatMap(
    (product) => product.availableLocations
  );
  return [...new Set(allLocations)];
}

// DOM Elements
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortBy");
const priceRangeSelect = document.getElementById("priceRange");
const ratingFilter = document.getElementById("ratingFilter");

// Utility Functions
function getStarRating(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function renderProduct(product) {
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-details">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="star">${getStarRating(product.rating)} (${
    product.reviews
  } রিভিউ)</p>
        <div class="location-info">
          <p>বিক্রয়যোগ্য অবস্থানসমূহ: ${product.availableLocations.join(
            ", "
          )}</p>
          <p>উৎপাদক: ${product.producer.name} (${product.producer.location})</p>
        </div>

        <div class='quantity'>
          <p style="font-size: 25px; font-weight: bold;">${product.quantity}</p>
          <button class="add-to-cart" onclick="cart.addToCart(${
            product.id
          })">Add to Cart</button>
        </div>

        <div class="price-and-button">
          <p class="price">৳${product.price}</p>
          <button onclick="window.location.href='BuyNow.html'">কিনুন</button>
        </div>
      </div>
    </div>
  `;
}
document.addEventListener("DOMContentLoaded", renderProduct);

function filterAndSortProducts() {
  let filteredProducts = [...products];

  // Search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
  }

  // Location filter
  const locationFilter = document.getElementById("locationFilter");
  if (locationFilter && locationFilter.value !== "all") {
    filteredProducts = filteredProducts.filter((product) =>
      product.availableLocations.includes(locationFilter.value)
    );
  }

  // Price range filter
  const priceRange = priceRangeSelect.value;
  if (priceRange !== "all") {
    filteredProducts = filteredProducts.filter((product) => {
      switch (priceRange) {
        case "under100":
          return product.price < 100;
        case "100-500":
          return product.price >= 100 && product.price <= 500;
        case "above500":
          return product.price > 500;
        default:
          return true;
      }
    });
  }

  // Rating filter
  const minRating = parseInt(ratingFilter.value);
  if (!isNaN(minRating)) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating >= minRating
    );
  }

  // Sorting
  const sortBy = sortSelect.value;
  if (sortBy) {
    filteredProducts.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }

  // Render filtered products
  productList.innerHTML = filteredProducts.map(renderProduct).join("");
}

// Event Listeners
searchInput.addEventListener("input", filterAndSortProducts);
sortSelect.addEventListener("change", filterAndSortProducts);
priceRangeSelect.addEventListener("change", filterAndSortProducts);
ratingFilter.addEventListener("change", filterAndSortProducts);

// Initial render and setup
document.addEventListener("DOMContentLoaded", () => {
  updateLocationFilter();
  filterAndSortProducts();
});

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const suggestions = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  // Display suggestions in a dropdown
});
