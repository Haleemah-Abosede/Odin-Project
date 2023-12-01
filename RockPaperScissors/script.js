const displayChoice = document.querySelector(".your-choice");
const displaycomputer = document.querySelector(".computer-choice");
const result = document.querySelector(".result");

moves = document.querySelector(".moves");
maxrounds = 5;
round = 0;
humanScore = 0;
computer = 0;

const play = document.querySelector(".play-game");

let playerChoice;
let computerChoice;
let score;

const buttons = document.querySelectorAll("button.player-btn");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    playerChoice = e.target.value;
    getComputerChoice();
    computerChoice = getComputerChoice();
  })
);

const getComputerChoice = () => {
  const input = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * input.length);
  return input[randomNum];
};

gameWinner = () => {
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

play.addEventListener("click", () => {
  result.textContent = gameWinner();
  displayChoice.textContent = "You chose " + playerChoice;
  displaycomputer.textContent = "Computer chose " + computerChoice;
});

function updateRound() {}
