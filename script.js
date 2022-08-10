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

function printWinner(winner) {
    switch (winner) {
        case 0:
            console.log("Tie")
            break;
        case 1:
            console.log("Player one wins")
            break;
        case 2:
            console.log("Player two wins")
            break;
        default:
            console.log("Something has gone horribly wrong")
            break;
    }
}

