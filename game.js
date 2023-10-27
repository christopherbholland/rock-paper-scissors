// const computerSelection = getComputerChoice(); // assign the output to computer's selection
//let playerChoice = prompt("Rock, paper, or scissors?");
//if (playerChoice.toLowerCase() == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
  //  alert
//}

    
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


const playerChoice = getPlayerChoice();
const computerSelection = getComputerChoice();

//return these strings at the end of the round to show the player's value and the computer's value
let playerWin = "You win! " + playerChoice + " beats " + computerSelection + ".";
let playerLose = "You lose! " + computerSelection + " beats " + playerChoice + ".";
let playerTie = "It's a tie";
let playerError = "Unknown play. Please enter rock, paper, or scissors.";

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

console.log(playRound());




// // // function game(playRound)

// // //         run playRound
// // //         use return value to determine winner
// // //         output result
// // //         keep score
// // //         play again x 4
// // //         output winner

// // console.log(playRound(playerSelection, computerSelection));
// // console.log(computerSelection);





// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));


// function game() {


//     // } else if {
//     // if (playerSelection = "Paper") { // evaluate player is Paper
//     //     if (computerSelection = "Rock") {
//     //         return playerWin;
//     //     if (computerSelection = "Scissors") // computer wins
//     //         return playerLose;
//     //     }
    // } else {
    // if (playerSelection = "Scissors") {
    //     if (computerSelection = "Rock") {
    //         return playerLose;
    //     } else if (computer = "Paper") { // player wins
    //         return playerWin;
    // } else {
    //     return playerError;
    //     }
    //     }
    //     }
    //     }

    //     }
    // // 