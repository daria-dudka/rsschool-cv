const burgerBtn = document.querySelector(".burger-btn");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

function bodyOverflow() {
    if (header.classList.contains("--active")) {
      body.style.overflowY = "hidden";
      body.style.height = `${nav.scrollHeight}px`;
    } else {
      body.style.overflowY = "auto";
      body.style.height = "100%";
    }
  }

function toggleMenu() {
  header.classList.toggle("--active");
  bodyOverflow();
}

function closeMenu(event) {
  if (event.target.classList.contains("nav__link")) {
    header.classList.remove("--active");
    bodyOverflow();
  }
}



burgerBtn.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);