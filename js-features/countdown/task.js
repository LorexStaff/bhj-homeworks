const timerElement = document.getElementById("timer");

let secondsRemaining = parseInt(timerElement.textContent);

function updateTimer() {
  secondsRemaining--;

  timerElement.textContent = secondsRemaining;

  if (secondsRemaining <= 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}

const intervalId = setInterval(updateTimer, 1000);
