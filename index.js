function getComputerChoice() {

  const random = Math.floor();
  if (random < 0.33) {
    return "rock";
  } else if (random > 0.33 && random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  };

};


function getHumanChoice() {

  let choice = prompt("Enter your choice: (Rock, Paper, or Scissors?)");

  return choice.toLowerCase();
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
      console.log (`It's a tie! The score is still: ${humanScore} - ${computerScore}!`);
    } else if (
      humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper"
    ) {
      humanScore++;
      console.log(`You won this round! The score is now: ${humanScore} - ${computerScore}!`)
    } else {
      computerScore++;
      console.log(`You lost this round! The score is now: ${humanScore} - ${computerScore}!`);
    };

  };

  for (let i = 0; i < 5; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  };

  if (humanScore === computerScore) {
    return `Game over, it's a tie! The final score is: ${humanScore} - ${computerScore}`
  } else if (humanScore > computerScore) {
    return `Good job, you won! The final score is: ${humanScore} - ${computerScore}`
  } else {
    return `That's too bad, you lost! The final score is: ${humanScore} - ${computerScore}`
  }
};

playGame();
