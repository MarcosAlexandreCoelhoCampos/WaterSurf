export function clickSignUp() {
  const modal = document.querySelector("[data-modal-sign-up]");
  const modalCloseButtons = document.querySelector("[modal-close-button]");
  const modalOpenButtons = document.querySelectorAll("[data-button-sign-up]");

  modalCloseButtons.addEventListener("click", toggleModal);
  modalOpenButtons.forEach((e) => {
    e.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    modal.classList.toggle("active");
  }
}
