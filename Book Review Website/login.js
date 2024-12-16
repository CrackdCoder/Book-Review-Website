document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
  
    // Function to toggle between forms
    function toggleForm(formType) {
      if (formType === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
      } else {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
      }
    }
  
    // Add event listeners for form toggle buttons
    loginToggle.addEventListener('click', () => toggleForm('login'));
    signupToggle.addEventListener('click', () => toggleForm('signup'));
  
    // Add event listeners for links in forms
    document.getElementById('to-signup').addEventListener('click', (e) => {
      e.preventDefault();
      toggleForm('signup');
    });
  
    document.getElementById('to-login').addEventListener('click', (e) => {
      e.preventDefault();
      toggleForm('login');
    });
  
    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();  // Prevents the page from refreshing on submit
      // Example logic for checking credentials (this can be expanded based on your requirements)
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
      
      if (email === "user@example.com" && password === "password123" || email==="adarsh.123@gmail.com" && password==="adarsh123") {
        // Redirect to main site after successful login
        window.location.href = "bibliophile'sforum.html";
      } else {
        alert("Invalid credentials, please try again.");
      }
    });
  
    // Set default form on load
    toggleForm('login');
  });