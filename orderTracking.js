// orderTracking.js
const ORDER_STORAGE_KEY = "ruralTradeOrders";

// Generate a unique order ID
function generateOrderId() {
  return "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

// Save order to localStorage
function saveOrder(cartItems, totalAmount, paymentMethod) {
  const orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY) || "[]");

  const newOrder = {
    id: generateOrderId(),
    date: getCurrentDate(),
    items: cartItems,
    total: totalAmount,
    paymentMethod: paymentMethod,
    status: "processing",
  };

  orders.push(newOrder);
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
  return newOrder;
}

// Get all orders
function getOrders() {
  return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY) || "[]");
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
  const orders = getOrders();
  const orderIndex = orders.findIndex((order) => order.id === orderId);

  if (orderIndex !== -1) {
    orders[orderIndex].status = newStatus;
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
    return true;
  }
  return false;
}
