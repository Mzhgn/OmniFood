const $ = document;

const yearEl = $.querySelector(".year");

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// for mobile nav

const btnNav = $.querySelector(".btn-mobile-nav");
const headerEl = $.querySelector(".header");
const allLinks = $.querySelectorAll("a:link");
const mainNav = $.querySelector(".main-nav");

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
      const sectionEl = $.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky nav

document.addEventListener("scroll", () => {
  // console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 800) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
});
