function getComputerChoice () {

  const random = Math.random();
  if (random <= 0.33) {
    return "rock";
  } else if (random >= 0.33 && random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  };

};

function getHumanChoice () {

  const choice = prompt ("Enter your choice: Rock, Paper, or Scissors?");

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else {
    return "scissors";
  };

};

 let humanScore = 0;
 let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    humanScore++;
    return "Good job! One point goes to you!" 
  } else {
    computerScore++;
    return "That's too bad! One point goes to your opponent!"
  };

};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();