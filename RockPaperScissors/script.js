const displayChoice = document.querySelector(".your-choice");
const displaycomputer = document.querySelector(".computer-choice");
const result = document.querySelector(".result");
const play = document.querySelector(".play-game");
const reloadBtn = document.querySelector("button.reload");

moves = document.querySelector(".moves");
displayPlayerScore = document.querySelector(".p-score");
computerScore = document.querySelector(".c-score");

let counterNum = 5;
let playerCounter = 0;
let computerCounter = 0;
let timeoutID;

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
      return "Yippee! You win";
    }
  }
};

play.addEventListener("click", () => {
  counterDec();
  points();
  result.textContent = gameWinner();
  displayChoice.textContent = "You chose " + playerChoice;
  displaycomputer.textContent = "Computer chose " + computerChoice;

  if (counterNum == 0) {
    buttons.forEach((btn) => {
      btn.disabled = true;
    });
    const titleChange = document.querySelector("#title");
    titleChange.textContent = "Game Over";
    const status = document.querySelector("#status");
    if (playerCounter > computerCounter) {
      status.textContent = "You are the Ultimate Winner";
    } else if (playerCounter < computerCounter) {
      status.textContent = "Computer won";
    } else {
      status.textContent = "The game was a tie";
    }
  }
});

timeoutID = setTimeout(() => {
  resetGame();
}, 1000);

function counterDec() {
  if (counterNum > 0) {
    counterNum--;
    moves.textContent = counterNum;
  }
}

function points() {
  if (gameWinner() == "Yippee! You win") {
    playerCounter++;
    displayPlayerScore.textContent = playerCounter;
  } else if (
    gameWinner() == "You lose! Paper beats rock" ||
    gameWinner() == "You lose! Scissors beats paper" ||
    gameWinner() == "You lose! Rock beats paper"
  ) {
    computerCounter++;
    computerScore.textContent = computerCounter;
  }
}

function resetGame() {
  reloadBtn.addEventListener("click", () => {
    window.location.reload();
  });
}
