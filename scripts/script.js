function computerPlay() {
    const choices = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

function playerPlay() {
    let userChoice = prompt('What do you play? Rock/Paper/Scissors');
    return userChoice.toLowerCase();
}

function playRound() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return("3");
        } else if (computerSelection === 'paper') {
            return("2");
        } else {
            return("1");
        };
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return("3");
        } else if (computerSelection === 'scissors') {
            return("2");
        } else {
            return("1");
        };
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            return("3");
        } else if (computerSelection === 'rock') {
            return("2");
        } else {
            return("1");
        };
    } else {
        return;
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let roundWinner

    for (let i = 0; i < 5; i++) {
        roundWinner = playRound();
        console.log(roundWinner);
        if (roundWinner === "1") {
            playerScore = playerScore + 1;
            console.log("Player wins! Player: " + playerScore + " Computer: " + computerScore);
        } else if (roundWinner === "2") {
            computerScore = computerScore + 1;
            console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
        } else {
            console.log("Draw. Player: " + playerScore + " Computer: " + computerScore);
        }
    }

    if (playerScore < computerScore) {
        console.log("Computer Wins. The final score is: Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerScore > computerScore) {
        console.log("Player Wins! The final score is: Player: " + playerScore + " Computer: " + computerScore);
    } else {
        console.log("It's a Draw. Wanna play again? The final score is: Player: " + playerScore + " Computer: " + computerScore);
    }
}