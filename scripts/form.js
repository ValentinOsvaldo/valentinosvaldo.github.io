export default function form(id) {
    const form = document.querySelector(id);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
}