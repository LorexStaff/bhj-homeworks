const counterElement = document.getElementById("clicker__counter");
const cookieElement = document.getElementById("cookie");

let clickCount = 0;
let isSmaller = false;

cookieElement.addEventListener("click", () => {
  clickCount++;
  counterElement.textContent = clickCount;

  if (isSmaller) {
    cookieElement.style.width = "200px";
    cookieElement.style.height = "200px";
  } else {
    cookieElement.style.width = "150px";
    cookieElement.style.height = "150px";
  }

  isSmaller = !isSmaller;
});
