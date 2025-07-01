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

console.log(getHumanChoice());



