const moves = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return moves[Math.floor(Math.random()*4)]
}

function playRound(playerSelection, computerSelection){
    let playerLower = playerSelection.toLowerCase();
    
    let pIndex = moves.indexOf(playerLower);
    let cIndex = moves.indexOf(computerSelection);

    if (pIndex == (cIndex + 1)%3){
        return "You win! " + playerLower[0].toUpperCase() + playerLower.slice(1) + " beats " + computerSelection + ".";
    }

    else if (pIndex == cIndex){
        return "Tie!";
    }

    else return "You lose! " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerLower +".";
}