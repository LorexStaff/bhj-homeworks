document.addEventListener("click", function (event) {
  const fontSizeButton = event.target.closest(".font-size");
  if (!fontSizeButton) return;

  event.preventDefault();

  const book = document.getElementById("book");
  const fontSizeButtons = document.querySelectorAll(".font-size");

  fontSizeButtons.forEach((button) =>
    button.classList.remove("font-size_active")
  );
  fontSizeButton.classList.add("font-size_active");

  book.classList.remove("book_fs-small", "book_fs-big");

  const size = fontSizeButton.dataset.size;
  if (size === "small") {
    book.classList.add("book_fs-small");
  } else if (size === "big") {
    book.classList.add("book_fs-big");
  }
});
