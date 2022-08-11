const choices = ['rock', 'paper', 'scissors']
const playerCounter = document.querySelector('#player-score');
const computerCounter = document.querySelector('#computer-score');

let player1Wins = 0
let player2Wins = 0

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playerChoose(choice) {
    let computerChoice = getComputerChoice();
    let winner = getWinner(choice, computerChoice);

    if (winner == 1) {
        player1Wins++;
    }
    else if (winner == 2) {
        player2Wins++;
    }

    updateCounts();
}

function getWinner(player1, player2) {
    if (player1 == player2) {
        return 0;
    }
    else if (player1 == player2+1 || (player2 == choices.length-1 && player1 == 0)) {
        return 1;
    }
    else {
        return 2;
    }
}

function updateCounts() {
    playerCounter.textContent = player1Wins;
    computerCounter.textContent = player2Wins;
}
