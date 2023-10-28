function getPlayerChoice() { 
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
     } else {
        alert ("You can't play the game with that value. Choose rock, paper, or scissors.")
        return getPlayerChoice()
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // randomly pick a number
    switch (randomNumber) {  // set the output to one of the three options
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "unknown"; // this should never happen
    }
}


let playerChoice = getPlayerChoice();
let computerSelection = getComputerChoice();

//return these strings at the end of the round to show the player's value and the computer's value
let playerWin = "You win! " + playerChoice + " beats " + computerSelection + ".";
let playerLose = "You lose! " + computerSelection + " beats " + playerChoice + ".";
let playerTie = "It's a tie. Play again!";
let playerError = "Unknown play. Please enter rock, paper, or scissors.";

//evaluate the player's choice and computer's choice and output if the player wins or loses
function playRound () {
    if (playerChoice == computerSelection)
        return playerTie;
        else if (playerChoice == "rock" && computerSelection == "paper")  // evaluate player is Rock
            return playerLose; 
         else if (playerChoice == "rock" && computerSelection == "scissors")
            return playerWin;
         else if (playerChoice == "paper" && computerSelection == "rock")
            return playerWin;
         else if  (playerChoice == "paper" && computerSelection == "scissors")
            return playerLose;
         else if  (playerChoice == "scissors" && computerSelection == "rock")
            return playerLose;
         else if  (playerChoice == "scissors" && computerSelection == "paper")
            return playerWin;
        }    

function game () {
    let playerScore = 0;
    let computerScore = 0;
    let gameRounds = 0;
    function playNextRound() {
        if (gameRounds < 5) {
            let playerChoice = getPlayerChoice();
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            console.log(result);

            // Update scores based on result
            if (result.includes("win")) {
                playerScore++;
            } else if (result.includes("lose")) {
                computerScore++;
            }

            gameRounds++;

            console.log(`Player: ${playerScore} - Computer: ${computerScore}`);

            if (playerScore < 3 && computerScore < 3) {
                playNextRound(); // Play the next round
            } else {
                //end the game if someone wins 3
                if (playerScore > computerScore) {
                    console.log("You win the game!");
                } else {
                    console.log("You lose! Computer wins!");
                    
                }

                console.log(`Total rounds played: ${gameRounds}`);

            
                
            }
        }
        

    }

    playNextRound();
    }

    game();