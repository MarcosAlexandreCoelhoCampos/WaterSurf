export function menu() {
  const menuButton = document.querySelector("[data-menu-button");
  const menuUl = document.querySelector("[data-menu-ul");

  menuButton.addEventListener("click", menuToggle);

  function menuToggle() {
    menuUl.classList.toggle("active");
  }
}
