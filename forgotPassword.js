function showMessage(message, type) {
  var messageBox = document.createElement('div');
  messageBox.className = 'message-box ' + type;
  messageBox.textContent = message;
    
  messageBox.setAttribute('role', 'alert');
  messageBox.setAttribute('aria-live', 'assertive');
  messageBox.setAttribute('aria-atomic', 'true');
  document.body.appendChild(messageBox);
  
  setTimeout(function() {
    messageBox.style.opacity = '0';
    setTimeout(function() {
      messageBox.parentNode.removeChild(messageBox);
    }, 1000);
  }, 3000);
}

function resetPassword() {
  var email = document.querySelector('.email1').value.trim();
    
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }
    
  if(email === "") {
    showMessage("Please enter your email.", "error");
    return;
  }
    
  var userJSON = localStorage.getItem(email);

  if(userJSON) {
    var user = JSON.parse(userJSON);
    
      
    alert("Your pasword is: " + user.password);
    showMessage("Password recovered successfully!", "success");
    setTimeout(function() {
      window.location.href = "index.html";
    }, 2000);
  } else {
    showMessage("Email address not found. Please enter a registered email address.", "error");
  }
}