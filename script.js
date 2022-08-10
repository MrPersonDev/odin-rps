const choices = ['rock', 'paper', 'scissors']

console.log("Welcome to scuffed rps")

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let choice
    do {
        choice = prompt("Rock Paper or Scissors") 
    }
    while (!choices.includes(choice))

    return choices.indexOf(choice)
}

function getWinner(player1, player2) {
    if (player1 == player2) {
        return 0
    }
    else if (player1 > player2 || player2 == choices.length() && player1 == 0) {
        return 1
    }
    else {
        return 2
    }
}
