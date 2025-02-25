function rotateText(rotator) {
  const cases = rotator.querySelectorAll(".rotator__case");
  let currentIndex = 0;

  function changeText() {
    cases.forEach((c) => c.classList.remove("rotator__case_active"));
    cases[currentIndex].classList.add("rotator__case_active");

    const speed = parseInt(cases[currentIndex].dataset.speed) || 1000;
    const color = cases[currentIndex].dataset.color || "";
    cases[currentIndex].style.color = color;

    currentIndex = (currentIndex + 1) % cases.length;
  }

  setInterval(changeText, parseInt(cases[currentIndex].dataset.speed) || 1000);
}

document.querySelectorAll(".rotator").forEach(rotateText);
