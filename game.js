//Function to capitalize the first letter of each word
function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//Function to get the player's choice for the round
function getPlayerChoice() { 
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase(); // this converts the selection to lowercase
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
     } else { // if the player doesn't enter rock, paper, or scissors, we want them to re-enter it
        alert ("You can't play the game with that value. Choose rock, paper, or scissors.")
        return getPlayerChoice()
    }
}

//Function to get the computer's choice for the round
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
function playRound() {
    const playerChoice = getPlayerChoice();
    const computerSelection = getComputerChoice();
    
   
    if (playerChoice === computerSelection) { // evaluate if this is a tie
        alert("It's a tie. Play another round!"); // alert if there's a tie
        return playRound(); // play again if there's a tie
    // run through the comparison of playerChoice to computerSelection if it is not a tie
    } else if (
        // check for player win scenarios
        (playerChoice === "rock" && computerSelection == "scissors") ||
        (playerChoice === "paper" && computerSelection == "rock") ||
        (playerChoice === "scissors" && computerSelection == "paper") 
     ) {
        // tell the user they won
        const result = titleCase(playerChoice) + " beats " + computerSelection;
        return "You win! " + result + ".";
    } else {
        // If it's not a tie and it's not a win, it's a loss for the player
        const result = titleCase(computerSelection) + " beats " + playerChoice;
        return "You lose! " + result + ".";
    }
}

//play the game
const result = playRound();
console.log(result);

//Function to keep score
function keepScore() {
    }
    let playerScore = 0;
    let computerScore = 0;
    if (result.includes("win!")) {
        playerScore++;
    } else {
        computerScore++;
}

keepScore();
console.log(playerScore, computerScore);


