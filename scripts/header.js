export function header() {
  const nav = document.querySelector("[data-nav]");
  let navTop = nav.offsetTop;

  window.addEventListener("resize", () => {
    navTop = nav.offsetTop;
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= navTop) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });
}
