// ============== MENU NAVBAR ================
const navlist = document.querySelector(".navlist");
const menuBtn = document.querySelector(".ri-menu-line");

menuBtn.onclick = function () {
  navlist.classList.toggle("active");
  menuBtn.classList.toggle("ri-arrow-up-double-line");
};

// ============== STICKY NAVBAR ================
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});

// ============== PORTFOLIO TABS ================
let portfolioTabs = document.getElementsByClassName("portfolio-tab");
let tabContents = document.getElementsByClassName("tab-content");

function tabOpen(x) {
  for (portfolioTab of portfolioTabs) {
    portfolioTab.classList.remove("active");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(x).classList.add("active-content");
}

// ============== DARK THEME================
let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = function () {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
// =========== about ===============
let CVButton = document.querySelector("#downloadCV");
CVButton.onclick = function () {
  const link = document.createElement("a");
  link.href = "/assets/pdf/JasonFuentesCV.pdf"; // Ruta al archivo dentro de la carpeta pdf
  link.download = "JasonFuentesCV.pdf"; // Nombre con el que se descargará
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
document.querySelector("#btn").onclick = function () {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
};

document.querySelector("#btn2").onclick = function () {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
};

// ============== TYPED JS ================
const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer", "Mobile App Developer","Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ============== SCROLL REVEAL ANIMATION ================
const sr = ScrollReveal({
  distance: "200px",
  duration: 3500,
  delay: 200,
  reset: true,
});

sr.reveal(".home-container h3", { origin: "top" });
sr.reveal(".home-container h1", { origin: "left" });
sr.reveal(".home-container p", { origin: "left" });
sr.reveal(".home-container .right", { origin: "right" });
sr.reveal(".social-icons-container", { origin: "right" });
sr.reveal(".about-container .title", { origin: "right" });
sr.reveal(".about-container h3", { origin: "bottom" });
sr.reveal(".about-container p", { origin: "bottom" });
sr.reveal(".about-container .left", { origin: "left" });
sr.reveal(".about-container .right", { origin: "right" });
sr.reveal(".services .title", { origin: "top" });
sr.reveal(".services .content-1", { origin: "left" });
sr.reveal(".services .content-2", { origin: "right" });
sr.reveal(".portfolio-container", { origin: "bottom" });
sr.reveal(".portfolio .title", { origin: "top" });
sr.reveal(".portfolio-buttons", { origin: "left" });
sr.reveal(".testimonial .title", { origin: "right" });
sr.reveal(".testimonial .testimonial-container", { origin: "left" });
sr.reveal(".contact .title", { origin: "top" });
sr.reveal(".contact .row .box", { origin: "right" });
sr.reveal(".contact .row .contact-form", { origin: "left" });
