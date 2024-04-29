function showMessage(message, type) {
  var messageBox = document.createElement('div');
  messageBox.className = 'message-box ' + type;
  messageBox.textContent = message;
  document.body.appendChild(messageBox);
  
  setTimeout(function() {
    messageBox.style.opacity = '0';
    setTimeout(function() {
      messageBox.parentNode.removeChild(messageBox);
    }, 1000);
  }, 3000);
}

function createAccount() {
  var firstName = document.querySelector('.FirstName').value.trim();
  var lastName = document.querySelector('.LastName').value.trim();
  var email = document.querySelector('.Email').value.trim();
  var password = document.querySelector('.Password').value.trim();
    
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }
    
  if(password.length < 6) {
    showMessage("Password must be at least 6 characters long.", "error");
    return;
  }
  
  if(localStorage.getItem(email)) {
    showMessage("An account with this email already exists. Please use a different email.", "error");
    return;
  }
    
  if(firstName === "" || lastName === "" || email === "" || password === "") {
    showMessage("Please enter complete name, email, and password.", "error");
    return;
  }
    
  // ito ay para sa hashing ng password para sa algorithim.
  var hashedPassword = hash(password);
    
  var user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword
  };
    
  var userJSON = JSON.stringify(user);
    
  localStorage.setItem(email, userJSON);

  showMessage("Account created successfully!", "success");
  
  setTimeout(function() {
    window.location.href = "index.html";
  }, 2000);
}

// Dummy hash function, papalitan pag third year na
function hash(str) {
  // This is a dummy function, papalitan ng proper hashing algorithm like bcrypt
  return str.split('').reverse().join('');
}