document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});

        
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 1;

function startGame() {
    document.getElementById("simpleGameScreen").style.display = "none";
    document.getElementById("guessTheNumberGame").style.display = "block";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const resultElement = document.getElementById("result");
    
    if (attempts <= 3) {
        if (userGuess === randomNumber) {
            alert('Thank you for reaching out to us. Your message has been received and forwarded to the relevant department for review. We value your feedback and are committed to improving our services based on your suggestions.');
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1000);
        } else if (userGuess < randomNumber) {
            resultElement.innerHTML = "Nice try, but " + userGuess + " is too low, Try again!";
            setTimeout(function(){resultElement.innerHTML ="";},2000);
        } else {
            resultElement.innerHTML = "Nice try, but " + userGuess + " is too high, Try again!";
        }   setTimeout(function(){resultElement.innerHTML ="";},2000);
        
        attempts++;
    } else {
        resultElement.innerHTML = "Maximum attempts reached. Your message didn't go through.";
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 3000);
    }
}

