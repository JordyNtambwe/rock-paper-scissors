// This functions get the computer to randomly return one of the string values: 'rock', 'paper', or 'scissors
function getComputerChoice() {
  let choice = Math.random()
  if (choice <= 1/3) {
    return 'Rock';
  } else if (choice < 2/3) {
    return 'Paper';
  } else {
    return 'Scissors';
  };
};
// This functions prompts the user to choose between 'rock', 'paper', or 'scissors' and return their choice
function getHumanChoice() {
  let question = prompt('Pick your choice: Rock, Paper, or Scissors?')
  let userChoice = question[0].toUpperCase() + question.slice(1).toLowerCase();
  return userChoice;
};

// These variables keeps track of the players score
let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
  } else if (
    humanChoice === 'Rock' && computerChoice === 'Scissors' ||
    humanChoice === 'Paper' && computerChoice === 'Rock' ||
    humanChoice === 'Scissors' && computerChoice == 'Paper'
  ) {
    humanScore++;
    console.log(`You won this round! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lost this round! ${computerChoice} beats ${humanChoice}.`);
  };
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);