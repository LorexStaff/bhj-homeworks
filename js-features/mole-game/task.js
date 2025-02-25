const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

let dead = 0;
let lost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function handleHoleClick(event) {
  const hole = event.target;

  if (hole.classList.contains("hole_has-mole")) {
    dead++;
    deadCounter.textContent = dead;
    hole.classList.remove("hole_has-mole");
  } else {
    lost++;
    lostCounter.textContent = lost;
  }

  checkGameStatus();
}

function checkGameStatus() {
  if (dead >= 10) {
    alert("Поздравляем! Вы победили!");
    resetGame();
  } else if (lost >= 5) {
    alert("Вы проиграли. Попробуйте еще раз!");
    resetGame();
  }
}

function resetGame() {
  dead = 0;
  lost = 0;
  deadCounter.textContent = dead;
  lostCounter.textContent = lost;

  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove("hole_has-mole");
  }
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.addEventListener("click", handleHoleClick);
}
