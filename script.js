const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playGame('rock'));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playGame('paper'));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playGame('scissors'));

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const message = document.querySelector('#message');

function playGame(playerSelection) {
    cleanScore();
    playRound(playerSelection, playComputer())
}

function cleanScore() {
    if (playerScore.textContent === '5' || computerScore.textContent === '5') {
        playerScore.textContent = '0';
        computerScore.textContent = '0';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        message.textContent = 'It\'s a tie';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore.textContent = (Number(playerScore.textContent) + 1);
        message.textContent = 'Nice one';
    } else {
        computerScore.textContent = (Number(computerScore.textContent) + 1);
        message.textContent = 'You can still make it';
    };
    
    checkWinner();
}

function playComputer() {
    const choices = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

function checkWinner() {
    if (playerScore.textContent === '5') {
        message.textContent = 'Player is the ultimate winner! Wanna play again?';
    } else if (computerScore.textContent === '5') {
        message.textContent = 'Computer beats the player. Wanna try again?';
    } else {
        return;
    }
}