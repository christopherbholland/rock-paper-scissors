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

let computerSelection = getComputerChoice(); // assign the output to computer's selection
const playerSelection = "rock";

//return these strings at the end of the round to show the player's value and the computer's value
let playerWin = "You win! " + playerSelection + " beats " + computerSelection + ".";
let playerLose = "You lose! " + computerSelection + " beats " + playerSelection + ".";
let playerTie = "It's a tie";
let playerError = "Unknown play. Please enter Rock, Paper, or Scissors.";

// function playRound (playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         return playerTie;
//         } else if { (playerSelection == "Rock" && computerSelection == "Paper")  // evaluate player is Rock
//             return playerLose; 
//         } else if { (playerSelection == "Rock" && computerSelection == "Scissors")
//             return playerWin;
//         } else if { (playerSelection == "Paper" && computerSelection == "Rock")
//             return playerWin;
//         } else if { (playerSelection == "Paper" && computerSelection == "Scissors")
//             return playerLose;
//         } else if { (playerSelection == "Scissors" && computerSelection == "Rock")
//             return playerLose;
//         } else if { (playerSelection == "Scissors" && computerSelection == "Paper")
//             return playerWin;
//         } else {
//             return playerError;
//         }    
// }

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
    // }



