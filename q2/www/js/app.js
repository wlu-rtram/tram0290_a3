function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Please enter a valid email address.')
    document.getElementById("email").focus();
    return false;
  }

  return true;
}

function validateEmailEmpty() {
  var email = document.getElementById("email").value;

  if (email == "") {
    alert("Empty email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateUsername() {
  var username = document.getElementById("username").value;

  var re = /^[a-zA-Z]+([_-]?[a-zA-Z0-9])*$/;
  var test = re.test(String(username));

  if (!test) {
    alert('Please enter a valid username.')
    document.getElementById("username").focus();

    return false;
  }

  return true;
}

function validateUsernameEmpty() {
  var email = document.getElementById("username").value;

  if (email == "") {
    alert("Empty username.");
    document.getElementById("username").focus();

    return false;
  }

  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;

  var re = /^[a-zA-Z]+([_-]?[a-zA-Z0-9])*$/;
  var test = re.test(String(password));

  if (!test) {
    alert('Please enter a valid password.')
    document.getElementById("password").focus();

    return false;
  }

  return true;
}

function validatePasswordEmpty() {
  var email = document.getElementById("password").value;

  if (email == "") {
    alert("Empty password.");
    document.getElementById("password").focus();

    return false;
  }

  return true;
}

// final check//
function validateForm() {
  if (!validateEmailEmpty()) {
    return false;
  }

  if (!validateEmail()) {
    return false;
  }

  if (!validateUsernameEmpty()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePasswordEmpty()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}

//show/hide pswd//
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
