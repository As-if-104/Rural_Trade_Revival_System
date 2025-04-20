document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const paymentMethod = document.getElementById("paymentMethod").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const amount = document.getElementById("amount").value;

    const paymentStatus = document.getElementById("paymentStatus");
    paymentStatus.style.display = "block";

    // সিমুলেশন: বিকাশ, নগদ বা রকেট ছাড়া অন্য কোনো পদ্ধতিতে ব্যর্থ দেখানো
    if (paymentMethod !== "cash" && accountNumber.length < 10) {
      paymentStatus.className = "payment-failed";
      paymentStatus.innerText = "পেমেন্ট ব্যর্থ হয়েছে! সঠিক তথ্য দিন।";
    } else {
      paymentStatus.className = "payment-success";
      paymentStatus.innerText =
        "পেমেন্ট সফল হয়েছে! আপনার অর্ডার প্রসেসিং চলছে।";
    }

    // ফর্ম রিসেট
    document.getElementById("paymentForm").reset();
  });
