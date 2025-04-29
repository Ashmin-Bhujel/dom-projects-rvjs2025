// DOM element
const digitalClock = document.querySelector("#digital-clock");

// Displaying current time
setInterval(() => {
  const clock = new Date();
  digitalClock.textContent = clock.toLocaleTimeString();
}, 1000);
