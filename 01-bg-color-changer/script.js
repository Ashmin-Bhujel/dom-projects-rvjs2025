// DOM element
const colorButtons = document.querySelectorAll(".color-button");

// Event listener for each button
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get background color value from data attribute
    const backgroundColor = button.dataset.backgroundColor;
    // Change background color
    const html = document.querySelector("html");
    html.style.backgroundColor = backgroundColor;
  });
});
