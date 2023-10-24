function getComputerChoice() {

}

function playRound (playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));

let playerWin = string("You win!", playerSelection, "beats ", ComputerSelection, ".");
let playerLose = string("You lose!", computerSelection beats playerSelection, ".");
let playerTie = string("It's a tie");
let playerError = string("Unknown play. Please enter Rock, Paper, or Scissors.")


function game() {
 if (playerSelection === computerSelection) {
    return playerTie;
 } else if {
    if (_playerSelection    === Rock) { // evaluate player is Rock
        if (computer = Paper) {
            return playerLose;
        } else if (computer = Scissors) {
            return playerWin;
        }
    } else {
    if (playerSelection === Paper) { // evaluate player is Paper
        if (computerSelection === Rock) {
            return playerWin;
        if (computerSelection === Scissors) // computer wins
            return playerLose;
        }
    } else {
    if (playerSelection === Scissors) {
        if (computerSelection === Rock) {
            return playerLose;
        } else if (computer === Paper) { => player wins
            return playerWin;
    } else {
        return playerError;
        }
        }
        }
        }

        }
    }



