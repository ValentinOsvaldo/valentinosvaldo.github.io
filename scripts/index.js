import menu from "./menu.js";
import form from "./form.js";
import modal from "./modal-projects.js";

menu(".menu-btn", ".menu");
form(".form");
modal(".project-card");

document.addEventListener("DOMContentLoaded", (e) => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("fade");
    setTimeout(() => {
      loader.remove();
    }, 1000);
  }, 1000);
});
