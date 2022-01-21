

function playComputer() {
    const choices = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

function playPlayer() {
    let playerChoice = prompt('What do you play? Rock/Paper/Scissors');
    return playerChoice.toLowerCase();
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('rock'));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('paper'));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('scissors'));

function playRound(playerSelection) {
    
    const computerSelection = playComputer();

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log("3");
        } else if (computerSelection === 'paper') {
            console.log("2");
        } else {
            console.log("1");
        };
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            console.log("3");
        } else if (computerSelection === 'scissors') {
            console.log("2");
        } else {
            console.log("1");
        };
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            console.log("3");
        } else if (computerSelection === 'rock') {
            console.log("2");
        } else {
            console.log("1");
        };
    } else {
        return;
    }
}

// function game() {
//     let playerScore = 0
//     let computerScore = 0
//     let roundWinner
// 
//     for (let i = 0; i < 5; i++) {
//         roundWinner = playRound();
//         console.log(roundWinner);
//         if (roundWinner === "1") {
//             playerScore = playerScore + 1;
//             console.log("Player wins! Player: " + playerScore + " Computer: " + computerScore);
//         } else if (roundWinner === "2") {
//             computerScore = computerScore + 1;
//             console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
//         } else {
//             console.log("Draw. Player: " + playerScore + " Computer: " + computerScore);
//         }
//     }
// 
//     if (playerScore < computerScore) {
//         alert("Computer Wins. The final score is: Player: " + playerScore + " Computer: " + computerScore);
//     } else if (playerScore > computerScore) {
//         alert("Player Wins! The final score is: Player: " + playerScore + " Computer: " + computerScore);
//     } else {
//         alert   ("It's a Draw. Wanna play again? The final score is: Player: " + playerScore + " Computer: " + computerScore);
//     }
// }
