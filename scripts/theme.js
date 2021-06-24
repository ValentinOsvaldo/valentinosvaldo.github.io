export default function changeTheme() {
  const mode = document.getElementById("mode");
  const darkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    mode.textContent = "Theme: 🌙";
  };
  const ligthMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    mode.textContent = "Theme: ☀️";
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(".theme-btn")) {
        e.preventDefault();

      if (!document.body.classList.contains("dark-mode")) { // Si no se tiene la clase dark-mode al hacer click
        darkMode(); // Ejecutaremos la funcion dark-mode
      } else {
        ligthMode(); // De lo contrario se ejecutara la light mode
      }

      document.querySelector(".menu").classList.remove("active");
    }
  });

  if (localStorage.getItem("theme") === null) ligthMode();
  if (localStorage.getItem("theme") === "dark") darkMode();
  if (localStorage.getItem("theme") === "light") ligthMode();
}
