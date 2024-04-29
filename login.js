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

function nextPassword() {
  var email = document.querySelector('.email1').value;
  var password = document.querySelector('.pass1').value;
    
  if(email.trim() === "" || password.trim() === "") {
    showMessage("Please enter both email and password.", "error");
    return;
  }
    
  var userJSON = localStorage.getItem(email);

  if(userJSON) {
    var user = JSON.parse(userJSON);
      
    if(user.password === password) {
      showMessage("Sign in successful!", "success");
      setTimeout(function() {
        window.location.href = "1/index.html";
      }, 2000);
    } else {
      showMessage("Incorrect password. Please try again.", "error");
    }
  } else {
    showMessage("User not found. Please sign up first.", "error");
  }
}