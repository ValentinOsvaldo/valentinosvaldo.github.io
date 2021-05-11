export default function menu(btn, menu) {
  const BTN = document.querySelector(`${btn} *`),
    MENU = document.querySelector(menu);

  BTN.addEventListener("click", () => MENU.classList.toggle("active"));

  document.addEventListener("click", (e) => {
    if (e.target !== BTN || e.target.matches(".menu a")) {
      MENU.classList.remove("active");
    }
  });
}
