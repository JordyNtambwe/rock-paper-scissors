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