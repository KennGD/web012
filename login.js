function nextPassword() {
  var email = document.querySelector('.email1').value;
  var password = document.querySelector('.pass1').value;
    
  if(email.trim() === "" || password.trim() === "") {
    alert("Please enter both email and password.", "error");
    return;
  }
    
  var userJSON = localStorage.getItem(email);

  if(userJSON) {
    var user = JSON.parse(userJSON);
      
    if(user.password === password) {
      alert("Sign in successful!", "success");
      setTimeout(function() {
        window.location.href = "1/index.html";
      }, 1000);
    } else {
      alert("Incorrect password. Please try again.", "error");
    }
  } else {
    alert("User not found. Please sign up first.", "error");
  }
}