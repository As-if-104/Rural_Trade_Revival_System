// script.js
function submitReview() {
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  const ID = document.getElementById("ID").value.trim();
  const rate = document.getElementById("rate").value.trim();

  if (name && comment && ID && rate) {
    const reviewSection = document.getElementById("reviews");

    // Create review div
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");

    // Create name element
    const nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.textContent = name;

    // Create ID element
    const IDElement = document.createElement("p");
    IDElement.classList.add("ID");
    IDElement.textContent = `Product ID: ${ID}`;

    // Create comment element
    const commentElement = document.createElement("p");
    commentElement.classList.add("comment");
    commentElement.textContent = comment;

    // Create rating element
    const rateElement = document.createElement("p");
    rateElement.classList.add("rate");
    rateElement.textContent = `Rating: ${rate}/5`;

    // Append name and comment to review div
    reviewDiv.appendChild(nameElement);
    reviewDiv.appendChild(commentElement);
    reviewDiv.appendChild(IDElement);
    reviewDiv.appendChild(rateElement);

    // Append review div to reviews section
    reviewSection.appendChild(reviewDiv);

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("ID").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("rate").value = "1";
  } else {
    alert("Please enter both name and review.");
  }
 }
