// Show Signup Modal
function showSignup() {
  document.getElementById("signup-modal").style.display = "flex";
}

// Close Modal
function closeSignup() {
  document.getElementById("signup-modal").style.display = "none";
}

// Validate Signup
function validateSignup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!name || !email || !pass) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Signup successful!");
  closeSignup();
  return false; // Prevent actual submission
}
