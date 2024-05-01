document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});

        
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 1;

function startGame() {
    document.getElementById("simpleGameScreen").style.display = "none";
    document.getElementById("guessTheNumberGame").style.display = "block";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const resultElement = document.getElementById("result");
    
    if (attempts <= 5) {
        if (userGuess === randomNumber) {
            alert('Your Message Has Been Submitted');
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
        resultElement.innerHTML = "Maximum attempts reached. Going back to home.";
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 3000);
    }
}

