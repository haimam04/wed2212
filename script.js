let dark = document.getElementById("DarkMode");
dark.onclick = function () {
  document.body.classList.toggle("dark-mode");
};

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ===================================================================

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Frontend Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ===================================================================

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  ".heading, .home-content h1, .home-sci, .about-content p, .progress i, .progress span ",
  { origin: "top" }
);
ScrollReveal().reveal(".about-img, .contact, .textarea-field", {
  origin: "bottom",
});
ScrollReveal().reveal(
  ".btn-box, .text-animate, .about-content h3, .progress h3, .bar span, .portfolio-box, .input-box",
  { origin: "left" }
);
ScrollReveal().reveal(".logo, .home-content p, .title", { origin: "right" });
