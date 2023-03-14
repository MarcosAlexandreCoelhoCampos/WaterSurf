export function active() {
  const toActive = document.querySelectorAll("[data-active]");

  const getElementAttribute = (e) => e.target.getAttribute("data-active");
  const getElement = (e) => document.querySelector(getElementAttribute(e));
  const active = (e) => getElement(e).classList.toggle("active");

  toActive.forEach((e) => e.addEventListener("click", active));
}
