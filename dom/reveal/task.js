function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", function () {
    reveals.forEach((reveal) => {
      const rect = reveal.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8) {
        reveal.classList.add("reveal_active");
      }
    });
  });
}

revealOnScroll();
