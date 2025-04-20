// Sample order data
let orders = [
  { id: 1, product: "আলু", quantity: 3, price: 300, status: "প্রসেসিং" },
  {
    id: 2,
    product: "পেঁয়াজ",
    quantity: 2,
    price: 200,
    status: "ডেলিভারী সম্পন্ন",
  },
  { id: 3, product: "চিংড়ি মাছ", quantity: 1, price: 700, status: "প্রসেসিং" },
];

// অর্ডার তালিকা প্রদর্শন
function displayOrders() {
  const orderTableBody = document.querySelector("#orderTable tbody");
  orderTableBody.innerHTML = orders
    .map(
      (order) => `
        <tr>
            <td>${order.id}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>৳${order.price}</td>
            <td>${order.status}</td>
            <td>
                ${
                  order.status === "প্রসেসিং"
                    ? `<button onclick="cancelOrder(${order.id})">বাতিল করুন</button>`
                    : "N/A"
                }
            </td>
        </tr>
    `
    )
    .join("");
}

// অর্ডার বাতিল করার ফাংশন
function cancelOrder(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = "বাতিল";
    document.getElementById(
      "orderMessage"
    ).innerText = `অর্ডার ${orderId} সফলভাবে বাতিল করা হয়েছে।`;
    displayOrders();
  }
}

// প্রারম্ভিক অর্ডার তালিকা প্রদর্শন
document.addEventListener("DOMContentLoaded", displayOrders);
