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

function validateCountry() {
  var country = document.getElementById("country").value;

  var re = /Canada|United States/;
  var test = re.test(String(country));


  if (!test) {
    alert('Please enter Canada or United States')
    document.getElementById("country").focus();

    return false;
  }

  return true;
}

function validateCountryEmpty() {
  var country = document.getElementById("country").value;

  if (country == "") {
    alert("Please enter a Country");
    document.getElementById("country").focus();

    return false;
  }

  return true;
}

function validateDescription() {
  var description = document.getElementById("description").value;

  var re = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9.!?])*/;
  var test = re.test(String(description));

  if (!test) {
    alert('Please enter a description.')
    document.getElementById("description").focus();

    return false;
  }

  return true;
}

function validateDescriptionEmpty() {
  var description = document.getElementById("description").value;

  if (description == "") {
    alert("Empty description.");
    document.getElementById("description").focus();

    return false;
  }

  return true;
}


function validateImage() {
  var avatarImage = document.getElementById("avatarImage").value;

  if (avatarImage == "") {
    alert("Please upload an image.");
    document.getElementById("avatarImage").focus();

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

  if (!validateCountryEmpty()) {
    return false;
  }

  if (!validateCountry()) {
    return false;
  }

  if (!validateDescriptionEmpty()) {
    return false;
  }

  if (!validateDescription()) {
    return false;
  }

  if (!validateImage()) {
    return false;
  }

  return true;
}
