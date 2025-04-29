// DOM element
const form = document.querySelector("form");
const userGuessField = form.querySelector("#user-guess");
const submitButton = form.querySelector("button[type='submit']");
const startNewGameButton = form.querySelector("#start-new-game");
const messageDisplay = document.querySelector("#message");
const previousGuessesDisplay = document.querySelector("#previous-guesses");
const remainingAttemptsDisplay = document.querySelector("#remaining-attempts");

// Generate a random number
let randomNumber = generateRandomNumber(1, 10);

// Some data
const previousGuesses = [];
let remainingAttempts = 5;

// Functions
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function validateNumber(userGuess) {
  if (isNaN(userGuess) || userGuess <= 0 || userGuess > 10) {
    messageDisplay.textContent =
      "Please enter a valid number between 1 and 10.";
    return false;
  }

  return true;
}

function updateValues(userGuess) {
  if (remainingAttempts > 0) {
    remainingAttempts--;
    previousGuesses.push(userGuess);
    previousGuessesDisplay.textContent = `Previous Guesses: [${previousGuesses.join(
      ", "
    )}]`;
    remainingAttemptsDisplay.textContent = `Remaining attempts: ${remainingAttempts}`;

    if (remainingAttempts === 0) {
      messageDisplay.textContent = `Game Over! Out of attempts. The generated random number was ${randomNumber}`;
      endGame();
    }
  }
}

function endGame() {
  userGuessField.setAttribute("disabled", true);
  submitButton.classList.remove("show");
  startNewGameButton.classList.add("show");
}

function startNewGame() {
  randomNumber = generateRandomNumber(1, 10);
  previousGuesses.splice(0);
  previousGuessesDisplay.textContent = "Previous Guesses: []";
  remainingAttempts = 5;
  remainingAttemptsDisplay.textContent = `Remaining Attempts: ${remainingAttempts}`;
  messageDisplay.textContent = "Enter your guess to get started.";
  userGuessField.removeAttribute("disabled");
  submitButton.classList.add("show");
  startNewGameButton.classList.remove("show");
}

function checkResult(userGuess) {
  if (userGuess < randomNumber && remainingAttempts > 0) {
    messageDisplay.textContent = "Your guess is low";
  } else if (userGuess > randomNumber && remainingAttempts > 0) {
    messageDisplay.textContent = "Your guess is high";
  } else if (userGuess === randomNumber) {
    messageDisplay.textContent = `You guessed it right, The generated random number was ${randomNumber}`;
    endGame();
  }
}

// Event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userGuess = parseInt(userGuessField.value);
  userGuessField.value = "";
  const isValidNumber = validateNumber(userGuess);

  if (isValidNumber) {
    updateValues(userGuess);
    checkResult(userGuess);
  }
});

startNewGameButton.addEventListener("click", startNewGame);
