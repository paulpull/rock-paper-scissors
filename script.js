const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('rock', playComputer()));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('paper', playComputer()));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('scissors', playComputer()));

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const message = document.querySelector('#message');


function playRound(playerSelection, computerSelection) {
    
    // 3 = draw, 2 = loose, 1 = win

    if (playerSelection === computerSelection) {
        message.textContent = 'It\'s a tie';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore.textContent = (Number(playerScore.textContent) + 1);
        message.textContent = 'Player wins!';
    } else {
        computerScore.textContent = (Number(computerScore.textContent) + 1);
        message.textContent = 'Computer wins';
    };
}

function playComputer() {
    const choices = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
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