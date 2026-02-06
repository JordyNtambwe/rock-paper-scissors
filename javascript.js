// These variables keeps track of the players score
let humanScore = 0;
let computerScore = 0;
// This functions get the computer to randomly return one of the string values: 'rock', 'paper', or 'scissors
function getComputerChoice() {
  let choice = Math.random()
  if (choice <= 1/3) {
    return 'rock';
  } else if (choice < 2/3) {
    return 'paper';
  } else {
    return 'scissors';
  };
};
// This functions prompts the user to choose between 'rock', 'paper', or 'scissors' and return their choice
function getHumanChoice() {
  return prompt('Pick your choice: Rock, Paper, or Scissors?');
};