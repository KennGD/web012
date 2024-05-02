function createAccount() {
  var firstName = document.querySelector('.FirstName').value.trim();
  var lastName = document.querySelector('.LastName').value.trim();
  var email = document.querySelector('.Email').value.trim();
  var password = document.querySelector('.Password').value.trim();
    
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      alert("Please enter complete name, email, and password.");
    } else {
      alert("Please enter a valid email address.");
    }
    return;
  }
    
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }
  
  if (localStorage.getItem(email)) {
    alert("An account with this email already exists. Please use a different email.");
    return;
  }
    
  var user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };
    
  var userJSON = JSON.stringify(user);
    
  localStorage.setItem(email, userJSON);

  alert("Account created successfully!");
  
  setTimeout(function() {
  window.location.href = "login.html";
}, 1000);
}