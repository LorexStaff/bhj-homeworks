document.addEventListener("click", function (event) {
  const dropdownButton = event.target.closest(".dropdown__value");
  const dropdownList = event.target.closest(".dropdown");

  if (dropdownButton) {
    dropdownList
      .querySelector(".dropdown__list")
      .classList.toggle("dropdown__list_active");
  }

  const dropdownItem = event.target.closest(".dropdown__item");
  if (dropdownItem) {
    event.preventDefault();
    const selectedValue =
      dropdownItem.querySelector(".dropdown__link").textContent;
    dropdownList.querySelector(".dropdown__value").textContent = selectedValue;
    dropdownList
      .querySelector(".dropdown__list")
      .classList.remove("dropdown__list_active");
  }
});
