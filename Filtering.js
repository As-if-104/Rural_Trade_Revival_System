
// const products = [
//   {
//     id: 1,
//     name: "Apple",
//     description: "This is a great product for all your needs.",
//     rating: 4,
//     reviews: 200,
//     quantity: "3kg",
//     price: 600,
//     image: "Images/Apple.png",
//     producer: {
//       name: "Green Valley Farms",
//       location: "ঢাকা",
//       contactInfo: "producer1@example.com",
//     },
//     availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
//   },
//   {
//     id: 2,
//     name: "Banana",
//     description: "Affordable and reliable for everyday use.",
//     rating: 3,
//     reviews: 150,
//     quantity: "1Dozen",
//     price: 100,
//     image: "Images/Banana.png",
//     producer: {
//       name: "Green Valley Farms",
//       location: "ঢাকা",
//       contactInfo: "producer1@example.com",
//     },
//     availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
//   },
//   {
//     id: 3,
//     name: "Cabbage",
//     description: "Top-rated product with excellent performance.",
//     rating: 5,
//     reviews: 500,
//     quantity: "2pc",
//     price: 100,
//     image: "Images/Cabbage.png",
//     producer: {
//       name: "Green Valley Farms",
//       location: "ঢাকা",
//       contactInfo: "producer1@example.com",
//     },
//     availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
//   },
//   {
//     id: 4,
//     name: "Cauliflower",
//     description: "This is a great product for all your needs.",
//     rating: 4,
//     reviews: 200,
//     quantity: "2pc",
//     price: 60,
//     image: "Images/CauliFlower.png",
//     producer: {
//       name: "Green Valley Farms",
//       location: "ঢাকা",
//       contactInfo: "producer1@example.com",
//     },
//     availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
//   },
//   {
//     id: 5,
//     name: "Hilsha Fish",
//     description: "Affordable and reliable for everyday use.",
//     rating: 3,
//     reviews: 150,
//     quantity: "1kg",
//     price: 800,
//     image: "Images/Hilsha.png",
//     producer: {
//       name: "Green Valley Farms",
//       location: "ঢাকা",
//       contactInfo: "producer1@example.com",
//     },
//     availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
//   },
//   {
//     id: 6,
//     name: "Chingri",
//     description: "Top-rated product with excellent performance.",
//     rating: 5,
//     reviews: 500,
//     quantity: "1kg",
//     price: 700,
//     image: "Images/Chingri.png",
//     producer: {
//       name: "Green Valley Farms",
//       location: "ঢাকা",
//       contactInfo: "producer1@example.com",
//     },
//     availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
//   },
// ];

// const productList = document.getElementById("productList");
// const searchInput = document.getElementById("searchInput");
// const sortSelect = document.getElementById("sortBy");
// const priceRangeSelect = document.getElementById("priceRange");
// const ratingFilter = document.getElementById("ratingFilter");
// const locationFilter = document.getElementById("locationFilter");



// function getStarRating(rating) {
//   return "★".repeat(rating) + "☆".repeat(5 - rating);
// }

// function renderProduct(product) {
//   return `
//         <div class="product-card">
//             <div class="product-image">
//                 <img src="${product.image}" alt="${product.name}">
//             </div>
//             <div class="product-details">
//                 <h3>${product.name}</h3>
//                 <p class="description">${product.description}</p>
//                 <p class="star">${getStarRating(product.rating)} (${
//     product.reviews
//   } reviews)</p>
//                 <div>
//                     <p style="font-size: 20px;">${product.quantity}</p>
//                 </div>
//                 <div class="producer-info">
//                   <p>উৎপাদক: <a href="#" class="producer-link" data-producer-id="${
//                     product.id
//                   }">${product.producer.name}</a></p>
//                   <p>অবস্থান: ${product.availableLocations.join(", ")}</p>
//                 </div>
//                 <div class="price-and-button">
//                     <p class="price">৳${product.price}</p>
//                     <button onclick="window.location.href='BuyNow.html'">কিনুন</button>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// function showProducerProfile(productId) {
//   const product = products.find((p) => p.id === productId);
//   if (product) {
//     const profileModal = document.createElement("div");
//     profileModal.classList.add("producer-modal");
//     profileModal.innerHTML = `
//       <div class="modal-content">
//         <span class="close-modal">&times;</span>
//         <h2>${product.producer.name}</h2>
//         <p>অবস্থান: ${product.producer.location}</p>
//         <p>যোগাযোগ: ${product.producer.contactInfo}</p>
//         <p>পণ্য সরবরাহ করেছেন: ${product.name}</p>
//       </div>
//     `;
//     document.body.appendChild(profileModal);

//     // Close modal functionality
//     const closeModal = profileModal.querySelector(".close-modal");
//     closeModal.addEventListener("click", () => {
//       document.body.removeChild(profileModal);
//     });

//     // Close modal when clicking outside
//     profileModal.addEventListener("click", (e) => {
//       if (e.target === profileModal) {
//         document.body.removeChild(profileModal);
//       }
//     });
//   }
// }

// function filterAndSortProducts() {
//   let filteredProducts = [...products];

//   const searchTerm = searchInput.value.toLowerCase();
//   if (searchTerm) {
//     filteredProducts = filteredProducts.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm)
//     );
//   }

// const selectedLocation = locationFilter.value;
// if (selectedLocation !== "all") {
//   filteredProducts = filteredProducts.filter((product) =>
//     product.availableLocations.includes(selectedLocation)
//   );
// }

//   const priceRange = priceRangeSelect.value;
//   if (priceRange !== "all") {
//     filteredProducts = filteredProducts.filter((product) => {
//       switch (priceRange) {
//         case "under100":
//           return product.price < 100;
//         case "100-500":
//           return product.price >= 100 && product.price <= 500;
//         case "above500":
//           return product.price > 500;
//         default:
//           return true;
//       }
//     });
//   }

//   const minRating = parseInt(ratingFilter.value);
//   if (!isNaN(minRating)) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.rating >= minRating
//     );
//   }

//   const sortBy = sortSelect.value;
//   if (sortBy) {
//     filteredProducts.sort((a, b) => {
//       switch (sortBy) {
//         case "price-low":
//           return a.price - b.price;
//         case "price-high":
//           return b.price - a.price;
//         case "rating":
//           return b.rating - a.rating;
//         default:
//           return 0;
//       }
//     });
//   }

//   productList.innerHTML = filteredProducts.map(renderProduct).join("");

//   const producerLinks = document.querySelectorAll('.producer-link');
//   producerLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       const productId = parseInt(link.getAttribute('data-producer-id'));
//       showProducerProfile(productId);
//     });
//   });
// }

// const locationFilterHtml = `
//   <select id="locationFilter">
//     <option value="all">সব জায়গা</option>
//     <option value="ঢাকা">ঢাকা</option>
//     <option value="চট্টগ্রাম">চট্টগ্রাম</option>
//     <option value="গাজীপুর">গাজীপুর</option>
//     <option value="নারায়ণগঞ্জ">নারায়ণগঞ্জ</option>
//     <option value="কক্সবাজার">কক্সবাজার</option>
//   </select>
// `;

// const filterOptions = document.querySelector('.filter-options');
// filterOptions.insertAdjacentHTML('beforeend', locationFilterHtml);

// searchInput.addEventListener("input", filterAndSortProducts);
// sortSelect.addEventListener("change", filterAndSortProducts);
// priceRangeSelect.addEventListener("change", filterAndSortProducts);
// ratingFilter.addEventListener("change", filterAndSortProducts);
// locationFilter.addEventListener("change", filterAndSortProducts);


// filterAndSortProducts();



// Product Data with Enhanced Location Information
const products = [
  {
    id: 13,
    name: "রসুন",
    description: "Top-rated product with excellent performance.",
    rating: 3,
    reviews: 5,
    quantity: "250gm",
    price: 100,
    image: "Images/Rasun3.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 7,
    name: "আদা",
    description: "Top-rated product with excellent performance.",
    rating: 1,
    reviews: 5,
    quantity: "500gm",
    price: 139,
    image: "Images/Ada.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 8,
    name: "দেশী আদা",
    description: "Top-rated product with excellent performance.",
    rating: 5,
    reviews: 10,
    quantity: "500gm",
    price: 130,
    image: "Images/Ada5.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 11,
    name: "বড় রসুন",
    description: "Top-rated product with excellent performance.",
    rating: 4,
    reviews: 10,
    quantity: "500gm",
    price: 130,
    image: "Images/Rasun1.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 10,
    name: "থাই আদা",
    description: "Top-rated product with excellent performance.",
    rating: 2,
    reviews: 7,
    quantity: "250kg",
    price: 80,
    image: "Images/Ada4.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 9,
    name: "দেশী আদা",
    description: "Top-rated product with excellent performance.",
    rating: 2,
    reviews: 3,
    quantity: "250gm",
    price: 70,
    image: "Images/Ada3.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },

  {
    id: 12,
    name: "দেশী রসুন",
    description: "Top-rated product with excellent performance.",
    rating: 3,
    reviews: 12,
    quantity: "250gm",
    price: 50,
    image: "Images/Rasun2.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },

  {
    id: 15,
    name: "পেঁয়াজ",
    description: "Top-rated product with excellent performance.",
    rating: 5,
    reviews: 13,
    quantity: "1kg",
    price: 128,
    image: "Images/Peyaj1.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 16,
    name: "লাল পেঁয়াজ",
    description: "Top-rated product with excellent performance.",
    rating: 4,
    reviews: 20,
    quantity: "1kg",
    price: 130,
    image: "Images/Peyaj2.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 20,
    name: "দেশী আলু",
    description: "Top-rated product with excellent performance.",
    rating: 2,
    reviews: 2,
    quantity: "1kg",
    price: 80,
    image: "Images/Alu2.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 21,
    name: "বড় আলু",
    description: "Top-rated product with excellent performance.",
    rating: 3,
    reviews: 7,
    quantity: "1kg",
    price: 90,
    image: "Images/MishtiAlu1.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 17,
    name: "দেশী পেঁয়াজ",
    description: "Top-rated product with excellent performance.",
    rating: 3,
    reviews: 13,
    quantity: "500gm",
    price: 60,
    image: "Images/Peyaj3.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 18,
    name: "লাল পেঁয়াজ",
    description: "Top-rated product with excellent performance.",
    rating: 5,
    reviews: 16,
    quantity: "250gm",
    price: 30,
    image: "Images/Peyaj4.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 14,
    name: "রসুন",
    description: "Top-rated product with excellent performance.",
    rating: 2,
    reviews: 19,
    quantity: "500gm",
    price: 140,
    image: "Images/Rasun4.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 19,
    name: "আলু",
    description: "Top-rated product with excellent performance.",
    rating: 5,
    reviews: 20,
    quantity: "1kg",
    price: 79,
    image: "Images/ALu1.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 6,
    name: "চিংড়ি",
    description: "Top-rated product with excellent performance.",
    rating: 5,
    reviews: 100,
    quantity: "250gm",
    price: 219,
    image: "Images/Chingri.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 22,
    name: "মিষ্টি আলু",
    description: "Top-rated product with excellent performance.",
    rating: 5,
    reviews: 5,
    quantity: "1kg",
    price: 70,
    image: "Images/MishtiAlu2.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 23,
    name: "লাল আলু",
    description: "Top-rated product with excellent performance.",
    rating: 2,
    reviews: 5,
    quantity: "1kg",
    price: 79,
    image: "Images/LalAlu1.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 24,
    name: "লাল আলু",
    description: "Top-rated product with excellent performance.",
    rating: 3,
    reviews: 5,
    quantity: "1kg",
    price: 79,
    image: "Images/LalAlu2.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 1,
    name: "আপেল",
    description: "This is a great product for all your needs.",
    rating: 4,
    reviews: 100,
    quantity: "1kg",
    price: 370,
    image: "Images/Apple.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },
  {
    id: 2,
    name: "কলা",
    description: "Affordable and reliable for everyday use.",
    rating: 5,
    reviews: 40,
    quantity: "1 ডজন",
    price: 100,
    image: "Images/Banana.png",
    producer: {
      name: "Sunny Orchards",
      location: "চট্টগ্রাম",
    },
    availableLocations: ["চট্টগ্রাম", "কক্সবাজার"],
  },

  {
    id: 5,
    name: "ইলিশ মাছ",
    description: "Affordable and reliable for everyday use.",
    rating: 5,
    reviews: 150,
    quantity: "700gm",
    price: 1000,
    image: "Images/Hilsha.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  },

  {
    id: 3,
    name: "বাঁধাকপি",
    description: "Top-rated product with excellent performance.",
    rating: 4,
    reviews: 5,
    quantity: "each",
    price: 60,
    image: "Images/Cabbage.png",
    producer: {
      name: "Fresh Fields",
      location: "খুলনা",
    },
    availableLocations: ["খুলনা", "যশোর"],
  },
  {
    id: 4,
    name: "ফুলকপি",
    description: "This is a great product for all your needs.",
    rating: 4,
    reviews: 2,
    quantity: "each",
    price: 50,
    image: "Images/CauliFlower.png",
    producer: {
      name: "Green Valley Farms",
      location: "ঢাকা",
      contactInfo: "producer1@example.com",
    },
    availableLocations: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ"],
  }
];

// Function to update location filter dynamically
function updateLocationFilter() {
  const locationFilter = document.getElementById("locationFilter");
  if (!locationFilter) {
    const filterOptions = document.querySelector(".filter-options");
    const locationFilterHtml = `
      <select id="locationFilter">
        <option value="all">সব জায়গা</option>
        ${getUniqueLocations().map(location => 
          `<option value="${location}">${location}</option>`
        ).join('')}
      </select>
    `;
    filterOptions.insertAdjacentHTML('beforeend', locationFilterHtml);
    
    // Add event listener to the newly created location filter
    document.getElementById("locationFilter").addEventListener("change", filterAndSortProducts);
  }
}

// Get unique locations from all products
function getUniqueLocations() {
  const allLocations = products.flatMap(product => product.availableLocations);
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
document.addEventListener('DOMContentLoaded', renderProduct);

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
document.addEventListener('DOMContentLoaded', () => {
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
