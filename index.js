document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});

function messageForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill out all required fields.");
    return false;
  }
    alert('Thank you for meseging us... We will send your message after virifying you..')
  
  setTimeout(function() {
    window.location.href = 'game.html';
  }, 1000);
  
  return false;
}