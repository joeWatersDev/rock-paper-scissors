function getComputerChoice(){
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random()*4)]
}

function playRound(playerSelection, computerSelection){
    let playerLower = playerSelection.toLowerCase();
    let options = ["rock", "paper", "scissors"];
    let pIndex = options.indexOf(playerLower);
    let cIndex = options.indexOf(computerSelection);

    if (pIndex == (cIndex + 1)%3){
        return "You win! " + playerLower[0].toUpperCase() + playerLower.slice(1) + " beats " + computerSelection + ".";
    }

    else if (pIndex == cIndex){
        return "Tie!";
    }

    else return "You lose! " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerLower +".";
}