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
    if (humanScore === 5 || computerScore === 5) return;
    const results = document.querySelector('#results');
    const content = document.createElement('div');
    const winners = document.querySelector('#winners');
    if (humanChoice === computerChoice) {
      content.textContent = `It's a tie! Both chose ${humanChoice}. The score is stil ${humanScore} - ${computerScore}.`;
    } else if (
      humanChoice === 'Rock' && computerChoice === 'Scissors' ||
      humanChoice === 'Paper' && computerChoice === 'Rock' ||
      humanChoice === 'Scissors' && computerChoice == 'Paper'
    ) {
      humanScore++;
      content.textContent = `You won this round! ${humanChoice} beats ${computerChoice}. The score is now ${humanScore} - ${computerScore}.`;
    } else {
      computerScore++;
      content.textContent = `You lost this round! ${computerChoice} beats ${humanChoice}. The score is now ${computerScore} - ${humanScore}`;
    };
    results.appendChild(content);
    //This is responsible for the winners declaration when a player reaches 5 points
    if (humanScore === 5 || computerScore === 5) {
      const winnersDiv = document.createElement('div');
      if (humanScore === 5) {
        winnersDiv.textContent = `It's game over! You won! The final score is ${humanScore} - ${computerScore}`
      } else {
        winnersDiv.textContent = `It's game over! You lost! The final score is ${computerScore} - ${humanScore}`;
      };
      winners.appendChild(winnersDiv)
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
      const humanSelection = button.id;
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    });
  });
};

playGame();