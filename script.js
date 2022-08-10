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