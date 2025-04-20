// Create a ProductManager class to handle all product-related operations
class ProductManager {
  constructor() {
    this.products = JSON.parse(localStorage.getItem("products")) || [];
    this.init();
  }

  init() {
    // Initialize event listeners on the upload form if it exists
    const uploadForm = document.querySelector("form");
    if (uploadForm) {
      uploadForm.addEventListener("submit", (e) => this.handleProductUpload(e));
    }

    // Initialize dashboard if on dashboard page
    if (window.location.pathname.includes("UserDashBoard.html")) {
      this.updateDashboard();
    }
  }

  handleProductUpload(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const imageFile = formData.get("image");

    // Create a file reader to handle the image
    const reader = new FileReader();
    reader.onload = (event) => {
      const newProduct = {
        id: Date.now(),
        name: formData.get("product-name"),
        availability: formData.get("availability"),
        price: formData.get("price"),
        description: formData.get("description"),
        image: event.target.result,
        dateAdded: new Date().toISOString(),
      };

      // Add new product to array
      this.products.push(newProduct);

      // Save to localStorage
      this.saveProducts();

      // Show success message
      this.showNotification("Product uploaded successfully!");

      // Reset form
      e.target.reset();
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  }

  saveProducts() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  updateDashboard() {
    // Update total products count
    const totalProductsElement = document.querySelector(".card:nth-child(1) p");
    if (totalProductsElement) {
      totalProductsElement.textContent = this.products.length;
    }

    // Create product grid if it doesn't exist
    let productGrid = document.querySelector(".product-grid");
    if (!productGrid) {
      productGrid = document.createElement("section");
      productGrid.className = "product-grid";
      document.querySelector(".main-content").appendChild(productGrid);
    }

    // Clear existing products
    productGrid.innerHTML = "";

    // Add products to grid
    this.products.forEach((product) => {
      const productCard = this.createProductCard(product);
      productGrid.appendChild(productCard);
    });
  }

  createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Available: ${product.availability}</p>
            <p>${product.description}</p>
        `;
    return card;
  }

  showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Add necessary styles
const styles = `
    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
        margin-top: 20px;
    }

    .product-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 15px;
        background: white;
    }

    .product-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        animation: slideIn 0.5s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Initialize the ProductManager
document.addEventListener("DOMContentLoaded", () => {
  new ProductManager();
});
