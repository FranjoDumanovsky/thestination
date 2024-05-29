const menuBtn = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
const hero = document.querySelector(".hero");

menuBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    navLinks.classList.add("close");
  } else {
    navLinks.classList.remove("close");
    navLinks.classList.add("open");
  }
  menuBtn.classList.toggle("open");
  hero.classList.toggle("blur");
});
