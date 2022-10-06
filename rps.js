const moves = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return moves[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    let playerLower = playerSelection.toLowerCase();
    
    let pIndex = moves.indexOf(playerLower);
    let cIndex = moves.indexOf(computerSelection);

    if (pIndex == (cIndex + 1)%3){
        console.log("You win! " + playerLower[0].toUpperCase() + playerLower.slice(1) + " beats " + computerSelection + ".");
        return "player";
    }

    else if (pIndex == cIndex){
        console.log("Tie!");
        return "tie";
    }

    else{ 
        console.log("You lose! " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerLower +".");
        return "computer";
    }
}

function game(){
    let userMove = prompt("What move would you like to use? Rock, paper, or scissors?: ");
    let computerMove = getComputerChoice();
    let winner = playRound(userMove, computerMove);

    let playerScore = 0;
    let computerScore = 0;

    if (winner == "player") {
        playerScore += 1
    }

    else if (winner == "computer") {
        computerScore += 1
    }

}