const choices = ["rock", "paper", "scissors"];

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerChoice) {
  const computer = computerChoice();
  let outcome;

  if (playerChoice === computer) {
    outcome = "Tie!";
  } else if (
    (playerChoice === "rock" && computer === "scissors") ||
    (playerChoice === "paper" && computer === "rock") ||
    (playerChoice === "scissors" && computer === "paper")
  ) {
    outcome = "You win!";
  } else {
    outcome = "You lose!";
  }

  document.querySelector(".computer p").textContent = `Computer chose ${computer}.`;
  document.querySelector("#outcome").textContent = outcome;
}

document.querySelectorAll(".player button").forEach(button => {
  button.addEventListener("click", () => {
    play(button.classList[0]);
  });
});




