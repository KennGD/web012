        
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
            resultElement.innerHTML = 'Your Document Has Been Submitted';
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 3000);
        } else if (userGuess < randomNumber) {
            resultElement.innerHTML = "Too Low";
                setTimeout(function(){result.Element.innerHTML = "";}, 2000);
        } else {
            resultElement.innerHTML = "Too High";
                setTimeout(function(){result.Element.innerHTML = "";}, 2000);
        }
        attempts++;
    } else {
        resultElement.innerHTML = "Maximum attempts reached. Going back to home.";
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 3000);
    }
}

