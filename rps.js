const moves = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return moves[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    let playerLower = playerSelection.toLowerCase();
    
    let pIndex = moves.indexOf(playerLower);
    let cIndex = moves.indexOf(computerSelection);

    if (pIndex == (cIndex + 1)%3){
        console.log("You win the round! " + playerLower[0].toUpperCase() + playerLower.slice(1) + " beats " + computerSelection + ".");
        return "player";
    }

    else if (pIndex == cIndex){
        console.log("Tie!");
        return "tie";
    }

    else{ 
        console.log("You lose the round! " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerLower +".");
        return "computer";
    }
}

function reportResult(playerScore, computerScore){
    if (playerScore > computerScore) {
        console.log("You won the game!")
    }

    else if (playerScore < computerScore) {
        console.log("You lost the game!")
    }

    else {
        console.log("You tied the game!")
    }

    console.log("The final score was " + playerScore + "-" + computerScore)

}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (round = 0; round < 5; round++){
        let userMove = prompt("What move would you like to use? Rock, paper, or scissors?: ");
        let computerMove = getComputerChoice();
        let winner = playRound(userMove, computerMove);        

        if (winner == "player") {
            playerScore++
        }

        else if (winner == "computer") {
            computerScore++        
        }
    }

    reportResult(playerScore, computerScore)

}