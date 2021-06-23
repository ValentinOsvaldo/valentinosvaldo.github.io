import menu from "./menu.js";
import changeTheme from "./theme.js";

document.addEventListener("DOMContentLoaded", (e) => {
    menu(".menu-btn *");
    changeTheme();
});