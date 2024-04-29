document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  
  if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
    alert("Please fill out all required fields.");
    return false;
  }
  
  setTimeout(function() {
    window.location.href = 'game.html';
  }, 3000);
  
  return false;
}