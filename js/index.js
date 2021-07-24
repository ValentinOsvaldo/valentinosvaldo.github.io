import menu from "./menu.js";
import changeTheme from "./theme.js";

document.addEventListener("DOMContentLoaded", (e) => {
    menu(".menu-btn *");
    changeTheme();
});

// Date

const year = new Date().getFullYear(),
    $year = document.getElementById("year");

$year.innerHTML = year;

// ScrollReveal

ScrollReveal().reveal('#about', {
    delay: 400,
    duration: 500,
    reset: true,
});
ScrollReveal().reveal('#projects', {
    delay: 400,
    duration: 500,
    reset: true,
});
ScrollReveal().reveal('#services', {
    delay: 400,
    duration: 500,
    reset: true,
});