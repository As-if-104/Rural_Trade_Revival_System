
//         // Get the modal
// var modal = document.getElementById("authModal");

// // Get the button that opens the modal
// var btn = document.getElementById("signInBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// // Switch between Sign In and Sign Up
// var switchAuthLink = document.getElementById("switchAuthLink");
// var modalTitle = document.getElementById("modalTitle");
// var submitBtn = document.getElementById("submitBtn");
// var authForm = document.getElementById("authForm");

// switchAuthLink.onclick = function(e) {
//     e.preventDefault();
//     if (modalTitle.innerText === "Sign In") {
//         modalTitle.innerText = "Sign Up";
//         submitBtn.innerText = "Sign Up";
//         switchAuthLink.innerText = "Sign In";
//         document.getElementById("switchAuth").innerHTML = "Already have an account? <a href='#' id='switchAuthLink'>Sign In</a>";
//     } else {
//         modalTitle.innerText = "Sign In";
//         submitBtn.innerText = "Sign In";
//         switchAuthLink.innerText = "Sign Up";
//         document.getElementById("switchAuth").innerHTML = "Don't have an account? <a href='#' id='switchAuthLink'>Sign Up</a>";
//     }
// }

// // Form submission
// authForm.onsubmit = function(e) {
//     e.preventDefault();
//     // Here you would typically send the form data to a server
//     // For this example, we'll just log it to the console
//     console.log({
//         name: document.getElementById("name").value,
//         phone: document.getElementById("phone").value,
//         dob: document.getElementById("dob").value,
//         nid: document.getElementById("nid").value,
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value
//     });
    
//     // Close the modal after submission
//     modal.style.display = "none";
    
//     // Reset the form
//     authForm.reset();
    
//     // Simulate a successful login/signup
//     document.querySelector(".hello-signIn").innerText = "Hello, " + document.getElementById("name").value;
//     document.querySelector(".account-signIn").innerText = "Your Account";
// }

// var passwordInput = document.getElementById("password");
// var passwordStrength = document.getElementById("passwordStrength");

// passwordInput.addEventListener("input", function () {
//   var password = passwordInput.value;
//   var strength = 0;

//   if (password.match(/[a-z]+/)) {
//     strength += 1;
//   }
//   if (password.match(/[A-Z]+/)) {
//     strength += 1;
//   }
//   if (password.match(/[0-9]+/)) {
//     strength += 1;
//   }
//   if (password.match(/[$@#&!]+/)) {
//     strength += 1;
//   }

//   switch (strength) {
//     case 0:
//       passwordStrength.textContent = "";
//       break;
//     case 1:
//       passwordStrength.textContent = "Weak";
//       passwordStrength.className = "password-strength weak";
//       break;
//     case 2:
//       passwordStrength.textContent = "Medium";
//       passwordStrength.className = "password-strength medium";
//       break;
//     case 3:
//     case 4:
//       passwordStrength.textContent = "Strong";
//       passwordStrength.className = "password-strength strong";
//       break;
//   }
// });

// // Forgot Password functionality
// var forgotPasswordLink = document.getElementById("forgotPasswordLink");
// var forgotPasswordModal = document.getElementById("forgotPasswordModal");
// var resetPasswordForm = document.getElementById("resetPasswordForm");

// forgotPasswordLink.onclick = function (e) {
//   e.preventDefault();
//   forgotPasswordModal.style.display = "block";
//   authModal.style.display = "none";
// };

// resetPasswordForm.onsubmit = function (e) {
//   e.preventDefault();
//   var resetEmail = document.getElementById("resetEmail").value;
//   // Here you would typically send a password reset email
//   console.log("Password reset link sent to: " + resetEmail);
//   alert("Password reset link has been sent to your email.");
//   forgotPasswordModal.style.display = "none";
// };

// // Social Media Login
// document.getElementById("facebookLogin").onclick = function () {
//   console.log("Facebook login clicked");
//   // Implement Facebook login logic here
//   alert("Facebook login functionality would be implemented here.");
// };

// document.getElementById("googleLogin").onclick = function () {
//   console.log("Google login clicked");
//   // Implement Google login logic here
//   alert("Google login functionality would be implemented here.");
// };

// // Close button for forgot password modal
// forgotPasswordModal.getElementsByClassName("close")[0].onclick = function () {
//   forgotPasswordModal.style.display = "none";
// };

// // Click outside to close forgot password modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
//   if (event.target == forgotPasswordModal) {
//     forgotPasswordModal.style.display = "none";
//   }
// };


// const logregBox = document.querySelector('.logreg-box');
// const loginLink = document.querySelector(".logIn");
// const registerLink = document.querySelector(".register");

// registerLink.addEventListener('click', () => {
//   logregBox.classList.add('active');
// });

// loginLink.addEventListener('click', () => {
//   logregBox.classList.remove('active');
// });


// Get DOM elements
const navbar = document.querySelector('.navbar');
const navSignIn = document.querySelector('.nav-signIn');
// const logreg = document.querySelector('.logreg-box');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');
const loginLink = document.querySelector('.logIn');
const registerLink = document.querySelector('.register');

// Initially hide the login/register box
// logreg.style.display = 'none';

// Show login form when "Hello, sign in" is clicked
navSignIn.addEventListener('click', () => {
    // logreg.style.display = 'block';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

// Switch to register form
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Switch to login form
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    // Here you would typically send a request to your server to authenticate the user
    // For this example, we'll just simulate a successful login
    handleSuccessfulAuth(username);
});

// Handle register form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.querySelector('input[type="text"]').value;
    // Here you would typically send a request to your server to register the user
    // For this example, we'll just simulate a successful registration
    handleSuccessfulAuth(username);
});

// Function to handle successful authentication (login or register)
function handleSuccessfulAuth(username) {
    // Hide the login/register box
    // logreg.style.display = 'none';
    
    // Update the navbar
    navSignIn.innerHTML = `
        <div class="hello-signIn">Hello,</div>
        <div class="account-signIn">${username}</div>
    `;
    
    // You might want to store the username in localStorage or a cookie here
    // localStorage.setItem('username', username);
}

// Check if user is already logged in on page load
// This is a basic example and should be expanded for production use
window.addEventListener('load', () => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        handleSuccessfulAuth(storedUsername);
    }
});



// let signUpButton = document.querySelector('.form-box.register');
// let loginButton = document.querySelector('.form-box.login');
// let helloSignInButton = document.querySelector('.nav-signIn');

// helloSignInButton.addEventListener('click', () => {
//     helloSignInButton.style.display = 'none';
//     signUpButton.style.display = 'block';
//     loginButton.style.display = 'none';

// });

// সঠিক সিলেক্টর ব্যবহার করে এলিমেন্টগুলি নির্বাচন
// let loginForm = document.querySelector('.form-box.login');
// let registerForm = document.querySelector('.form-box.register');
// let helloSignInButton = document.querySelector('.nav-signIn');

// console.log('Login Form:', loginForm);
// console.log('Register Form:', registerForm);
// console.log('Hello Sign In Button:', helloSignInButton);

// helloSignInButton.addEventListener('click', () => {
//     console.log('Hello Sign In Button clicked');

//     if (loginForm) {
//         loginForm.style.display = 'none';
//         console.log('Login Form hidden');
//     } else {
//         console.error('Login Form not found');
//     }

//     if (registerForm) {
//         registerForm.style.display = 'block';
//         console.log('Register Form displayed');
//     } else {
//         console.error('Register Form not found');
//     }

//     if (helloSignInButton) {
//         helloSignInButton.style.display = 'none';
//         console.log('Hello Sign In Button hidden');
//     } else {
//         console.error('Hello Sign In Button not found');
//     }
// });

// // যদি helloSignInButton না পাওয়া যায়, তাহলে একটি ত্রুটি লগ করুন
// if (!helloSignInButton) {
//     console.error('Hello Sign In Button not found. Check your HTML and class names.');
// }

