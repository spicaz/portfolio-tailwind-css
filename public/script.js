// hamburger & nav menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// navbar header
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixNav) {
    header.classList.add("header-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("header-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// darkmode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  darkToggle.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark");
});
