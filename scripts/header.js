export function header() {
  const nav = document.querySelector("[data-nav]");
  const navHeight = nav.offsetHeight;
  const navTop = nav.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= navTop) {
      document.body.style.paddingTop = `${navHeight}px`;
      nav.classList.add("active");
    } else {
      document.body.style.paddingTop = 0;
      nav.classList.remove("active");
    }
  });
}
