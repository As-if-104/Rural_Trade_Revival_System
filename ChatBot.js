function toggleChatBox() {
  const chatBox = document.getElementById("chatSupportContainer");
  const isChatBoxOpen = chatBox.style.display === "block";

  // Toggle chatbox visibility
  chatBox.style.display = isChatBoxOpen ? "none" : "block";

  // Optionally, you can change the icon when the chatbox is open
//   const chatIcon = document.querySelector(".chatbot-icon");
//   chatIcon.innerHTML = isChatBoxOpen ? "💬" : "✖️"; 
}

// Initial greetings and bot's welcome message
const welcomeMessages = [
  "হ্যালো! আমি আপনার সাহায্যে আছি। আপনার কি কিছু সাহায্য দরকার?",
  "স্বাগতম! আমি এখানে আছি আপনাকে সাহায্য করার জন্য।",
];

let messageHistory = []; // Store conversation history

function sendMessage() {
  const chatInput = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");

  const userMessage = chatInput.value.trim();
  if (userMessage === "") return;

  // Add user message to chat
  const userMsgElem = `<div class="user-message"><strong>আপনি:</strong> ${userMessage}</div>`;
  chatBody.innerHTML += userMsgElem;

  // Add bot's response based on user message
  const botReply = generateBotReply(userMessage);
  const botMsgElem = `<div class="bot-message"><span class="bot-name">চ্যাটবট:</span> ${botReply}</div>`;
  chatBody.innerHTML += botMsgElem;

  // Scroll to the latest message
  chatBody.scrollTop = chatBody.scrollHeight;

  // Clear input
  chatInput.value = "";
}

// Generate bot response based on user input
function generateBotReply(userMessage) {
  if (userMessage.includes("পেমেন্ট কীভাবে করতে পারি?")) {
    return "আপনার পেমেন্ট সম্পর্কিত প্রশ্নের জন্য আমাদের পেমেন্ট সেকশন দেখুন।";
  } else if (userMessage.includes("অর্ডার কীভাবে করা যাবে?")) {
    return "আপনার অর্ডারের স্ট্যাটাস চেক করতে অর্ডার ম্যানেজমেন্ট সিস্টেম ব্যবহার করুন।";
  } else if (userMessage.includes("হ্যালো") || userMessage.includes("হাই")) {
    return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  } else if (userMessage.includes("কেমন আছেন")) {
    return "ধন্যবাদ, আমি ভালো আছি! আপনি কেমন আছেন?";
  } else if (userMessage.includes("আপনাদের সম্পর্কে জানতে চাই")){
    return "তার জন্য আপনি আমাদের হোম পেজ ঘুরে আসতে পারুন";
  }
  else if (userMessage.includes("জ্বি দরকার") || userMessage.includes("আমার কিছু সাহায্য দরকার")) {
    return "জ্বি অবশ্যই বলতে পারেন";
  } 
  else {
        return "দুঃখিত, আমি বুঝতে পারিনি। অনুগ্রহ করে পুনরায় চেষ্টা করুন।";
  }
}

// Initialize welcome message
document.addEventListener("DOMContentLoaded", () => {
  const chatBody = document.getElementById("chatBody");
  const botWelcome =
    welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  const welcomeMessageElem = `<div class="bot-message"><span class="bot-name">চ্যাটবট:</span> ${botWelcome}</div>`;
  chatBody.innerHTML += welcomeMessageElem;
});
