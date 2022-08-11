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
    else if (player1 > player2 || (player2 == choices.length-1 && player1 == 0)) {
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
            console.log("The computer wins")
            break;
        default:
            console.log("Something has gone horribly wrong")
            break;
    }
}

let player1Wins = 0
let player2Wins = 0

for (let i = 0; i < 5; i++) {
    let winner
    do {
        let player1 = getPlayerChoice()
        let player2 = getComputerChoice()
        winner = getWinner(player1, player2)
        printWinner(winner)
    }
    while (winner == 0)

    if (winner === 1) {
        player1Wins++
    }
    else if (winner === 2) {
        player2Wins++
    }
}

if (player1Wins > player2Wins) {
    console.log("Player one wins the series")
}
else {
    console.log("The computer wins the series")
}

console.log(player1Wins)
console.log(player2Wins)
