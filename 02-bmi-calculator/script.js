// DOM elements
const form = document.querySelector("form");
const weightField = form.querySelector("#weight");
const heightField = form.querySelector("#height");
const resultContainer = document.querySelector("#result-container");
const bmiNumber = resultContainer.querySelector("#bmi-number");
const bmiDescription = resultContainer.querySelector("#bmi-description");
const messageContainer = document.querySelector("#message-container");
const message = messageContainer.querySelector("#message");

// Functions
function hideResultAndMessage() {
  resultContainer.classList.remove("show");
  messageContainer.classList.remove("show");
}

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function validateUserInput(weight, height) {
  if (isNaN(weight) || weight <= 0) {
    messageContainer.classList.add("show");
    message.textContent = "Please enter a valid weight!";
    return false;
  } else if (isNaN(height) || height <= 0) {
    messageContainer.classList.add("show");
    message.textContent = "Please enter a valid height!";
    return false;
  }

  return true;
}

// Even listener
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const weight = parseFloat(weightField.value);
  const height = parseFloat(heightField.value);
  const isValidInput = validateUserInput(weight, height);

  if (isValidInput) {
    const bmi = calculateBMI(weight, height).toFixed(2);
    bmiNumber.textContent = bmi;

    if (bmi < 18.6) {
      bmiDescription.textContent = "Under Weight";
    } else if (bmi > 24.9) {
      bmiDescription.textContent = "Over Weight";
    } else {
      bmiDescription.textContent = "Normal Range";
    }

    resultContainer.classList.add("show");
  }
});
