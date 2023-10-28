//this is a function to get the player's choice for the round
function getPlayerChoice() { 
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase(); // this converts the selection to lowercase
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
     } else { // if the player doesn't enter rock, paper, or scissors, we want them to re-enter it
        alert ("You can't play the game with that value. Choose rock, paper, or scissors.")
        return getPlayerChoice()
    }
}

//this is a function to get the computer's choice for the round
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

//evaluate the player's choice and computer's choice and output if the player wins or loses
function playRound () {
    const playerChoice = getPlayerChoice();
    const computerSelection = getComputerChoice();
    //return these strings at the end of the round to show the player's value and the computer's value
    const playerWin = "You win! " + playerChoice + " beats " + computerSelection + ".";
    const playerLose = "You lose! " + computerSelection + " beats " + playerChoice + ".";
    const playerTie = "It's a tie. Play again!";
    const playerError = "Unknown play. Please enter rock, paper, or scissors.";


    if (playerChoice == computerSelection) // if it's a tie, log that before continuing
        return playerTie;
        // run through the comparison of playerChoice to computerSelection
        else if (playerChoice == "rock" && computerSelection == "paper")
        // for each comparison, return one of the strings above
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
         else
            return playerError; // in case something goes wrong, return an error
        }    

console.log(playRound());
