const getPlayerChoice = (userInput) => {
  if (userInput.toLowerCase() === "rock") {
    return userInput;
  } else if (userInput.toLowerCase() === "paper") {
    return userInput;
  } else if (userInput.toLowerCase() === "scissors") {
    return userInput;
  } else {
    console.log("Error! Invalid Input");
  }
};

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else if (randomNum === 2) {
    return "scissors";
  }
};

const gameWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "Lucky you! The game is a tie";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lose! Paper beats rock";
    } else {
      return "Yippee! You win";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lose! Scissors beats paper";
    } else {
      return "Yippee! You win";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lose! Rock beats paper";
    } else {
      return "Yippee! You won";
    }
  }
};

const playGame = () => {
  const userChoice = prompt("Select rock, paper or scissors");
  const playerChoice = getPlayerChoice(userChoice);
  console.log("You chose " + playerChoice);
  const computerChoice = getComputerChoice();
  console.log("Computer chose " + computerChoice);

  console.log(gameWinner(playerChoice, computerChoice));
};

playGame();
