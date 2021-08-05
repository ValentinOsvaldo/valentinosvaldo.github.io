export default function menu(id) {
  const menu = document.querySelector(".menu");

  document.addEventListener("click", (e) => {
    if (e.target.matches(id)) {
      e.preventDefault();
      menu.classList.toggle("active"); // Activando y desactivando el menu
    }

    if (e.target.matches(`.menu a`)) menu.classList.toggle("active"); // Activando y desactivando el menu
  });
}
