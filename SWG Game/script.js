
let attempts = 0;
const maxAttempts = 5;
let userWins = 0;   
let computerWins = 0;
let ties = 0; 


function sng(userChoice) {
    if (attempts >= maxAttempts) {
        document.getElementById('result').textContent = "Game Over! You've reached the maximum number of attempts.";
        document.getElementById('attempts').textContent = "You have no more attempts left.";
        document.getElementById('playAgainBtn').style.visibility = "visible";
        displayFinalResult();
        disableButtons();
        return;
    }


    attempts++;
    const choices = ["Snake", "Water", "Gun"]
    let computer_choice = choices[Math.floor(Math.random() * 3)]

    let result = '';
    if (userChoice === computer_choice) {
        result = "Match tie!! ";
        ties++
    } else if (
        (userChoice === "Snake" && computer_choice === "Water") ||
        (userChoice === "Water" && computer_choice === "Gun") ||
        (userChoice === "Gun" && computer_choice === "Snake")
    ) {
        result = "You Win!! ";
        userWins++
    } else {
        result = "You Lost!! ";
        computerWins++
    }

    result += `User chose ${userChoice} and computer chose ${computer_choice} `
    document.getElementById('result').textContent = result
    document.getElementById('attempts').textContent = `Attempts left: ${maxAttempts - attempts}`;

    function disableButtons() 
    {
        
        var buttons = document.querySelectorAll('.Design button');

        // Loop through and disable each button
        buttons.forEach(function(button) {
            button.disabled = true;
        }); 

    }   
}
function playAgain() {
    attempts = 0;
    userWins = 0; // Reset user wins
    computerWins = 0; // Reset computer wins
    ties = 0; // Reset the attempts
    document.getElementById('result').textContent = ''; // Clear previous result
    document.getElementById('attempts').textContent = `Attempts left: ${maxAttempts}`; // Reset attempt text
    document.getElementById('playAgainBtn').style.visibility = "hidden"; // Hide Play Again button
    enableButtons(); // Re-enable the buttons
}

function enableButtons() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}
function displayFinalResult() {
    
    let finalResult = '';
    if (userWins > computerWins) {
        finalResult = `You Won the Game! (Wins: ${userWins} - Losses: ${computerWins} - Ties: ${ties})`;
    } else if (userWins < computerWins) {
        finalResult = `You Lost the Game! (Wins: ${userWins} - Losses: ${computerWins} - Ties: ${ties})`;
    } else {
        finalResult = `It's a tie overall! (Wins: ${userWins} - Losses: ${computerWins} - Ties: ${ties})`;
    }

    document.getElementById('result').textContent = finalResult;
}