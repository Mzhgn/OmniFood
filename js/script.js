const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// for mobile nav

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  // console.log("hi");
  headerEl.classList.toggle("nav-open");
});
