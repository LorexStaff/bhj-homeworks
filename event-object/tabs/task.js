document.addEventListener("click", function (event) {
  const tab = event.target.closest(".tab");
  if (!tab) return;

  const tabsContainer = tab.closest(".tabs");
  const tabs = tabsContainer.querySelectorAll(".tab");
  const tabContents = tabsContainer.querySelectorAll(".tab__content");

  const index = Array.from(tabs).indexOf(tab);

  tabs.forEach((t) => t.classList.remove("tab_active"));
  tabContents.forEach((tc) => tc.classList.remove("tab__content_active"));

  tab.classList.add("tab_active");
  tabContents[index].classList.add("tab__content_active");
});
