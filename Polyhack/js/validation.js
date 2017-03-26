function validate() {
  let firstName = document.getElementById("firstName");
  if (firstName.length < 2 ) {
    let firstNameError = document.getElementById("firstName").style.background="rgba(249, 32, 37, .5)";
  } else {
    validateLastName()
  }
}

function validateLastName() {
  let lastName = document.getElementById("lastName");
  if (lastName.length < 2 ) {
    let lastNameError = document.getElementById("lastName").style.background="rgba(249, 32, 37, .5)";
  } else {
    validateUsername()
  }
}

function validateUsername () {
  let username = document.getElementById("username");
  if (username.length < 5) {
    let usernameError = document .getElementById("username").style.background="rgba(249, 32, 37, .5)";
  } else {
    validateEmail()
  }
}

function validateEmail () {
  let email = document.getElementById("email");
  if (email.length  < 5) {
    let emailError = document.getElementById("email").style.background="rgba(249, 32, 37, .5)";
  } else {
    validatePassword()
  }
}

function validatePassword() {
  let password = document.getElementById("password");
  if (password.length < 8) {
    let passwordError = document.getElementById("password").style.background="rgba(249, 32, 37, .5)";
  } else {
    confirmPassword()
  }
}

function confirmPassword() {
  let password = document.getElementById("password");
  let confirm = document.getElementById("confirm");
  if (confirm !== password) {
    let confirmError = document.getElementById("confirm").style.background="rgba(249, 32, 37, .5)";
  }
}













