// This functions get the computer to randomly return one of the string values: 'rock', 'paper', or 'scissors
function getComputerChoice() {
  let choice = Math.random()
  if (choice <= 1 / 3) {
    return 'Rock';
  } else if (choice < 2 / 3) {
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
// This function calls on the 'playRound' function to play 5 rounds, keeps track of the scores, and declares a winner at the end of the game
function playGame() {
  // These variables keeps track of the players score
  let humanScore = 0;
  let computerScore = 0;
  // This function takes the human and computer choice, play a single round, increment the round winner's score, and log the winner in the console each round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}. The score is stil ${humanScore} - ${computerScore}.`);
    } else if (
      humanChoice === 'Rock' && computerChoice === 'Scissors' ||
      humanChoice === 'Paper' && computerChoice === 'Rock' ||
      humanChoice === 'Scissors' && computerChoice == 'Paper'
    ) {
      humanScore++;
      console.log(`You won this round! ${humanChoice} beats ${computerChoice}. The score is now ${humanScore} - ${computerScore}.`);
    } else {
      computerScore++;
      console.log(`You lost this round! ${computerChoice} beats ${humanChoice}. The score is now ${computerScore} - ${humanScore}`);
    };
  };
  //This is responsible for the 'playGame' function to only play 5 rounds
  /* for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }; */
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const playerSelection = button.id;
      console.log(playRound(playerSelection));
    });
  });
  //This is responsible for the winners declaration at the end of the 5 rounds
  if (humanScore === computerScore) {
    console.log(`It's game over! It's a tie! The final score is ${humanScore} - ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(`It's game over! You won! The final score is ${humanScore} - ${computerScore}`);
  } else {
    console.log(`It's game over! You lost! The final score is ${computerScore} - ${humanScore}`);
  };
};

playGame();