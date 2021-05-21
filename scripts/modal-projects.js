export default function modal(id) {
  const card = document.querySelector(`${id} *`);

  document.addEventListener("click", (e) => {
    if (e.target === card) {
      console.log("Click");
    }
  });
}
