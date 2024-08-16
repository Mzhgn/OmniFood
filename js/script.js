const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// for mobile nav

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

btnNav.addEventListener("click", () => {
  // console.log("hi");
  headerEl.classList.toggle("nav-open");
});

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);
    if (href === "#") {
      window.scrollTo({
        top: 20,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
