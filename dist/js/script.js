// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

document.addEventListener("click", function (event) {
  // Periksa apakah elemen yang diklik adalah menu hamburger
  if (event.target === hamburger) {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  } else {
    // Jika elemen yang diklik bukan menu hamburger, Anda dapat menanganinya secara berbeda
    // Misalnya, Anda mungkin ingin menutup menu jika terbuka dan pengguna mengklik di luar menu
    navMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
