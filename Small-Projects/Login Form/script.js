function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if username is empty or contains non-alphanumeric characters
  if (username === "" || !/^[a-zA-Z0-9]+$/.test(username)) {
    alert(
      "Username must contain only alphanumeric characters and cannot be empty"
    );
    return false;
  }
  var passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  // Check if password is empty or does not meet the criteria
  if (password === "" || !passwordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    );
    return false;
  }

  // If both fields are valid, submit the form
  alert("Form submitted successfully!");
  document.getElementById("myForm").submit();
}

const login = document
  .getElementById("button")
  .addEventListener("click", validateForm);
