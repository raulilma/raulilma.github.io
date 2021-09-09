const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Ketika kita klik setiap nav__linknya, kita hilangkan kelas show-menunya.
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Skill gan */
const kontenSkill = document.getElementsByClassName("skill__konten"),
  headerSkill = document.querySelectorAll(".skills__header");

function toggleSkill() {
  let kelasItem = this.parentNode.className;
  for (i = 0; i < kontenSkill.length; i++) kontenSkill[i].className = "skill__konten skills__close";
  if (kelasItem == "skill__konten skills__close") this.parentNode.className = "skill__konten skills__open";
}

headerSkill.forEach((el) => {
  el.addEventListener("click", toggleSkill);
});

/* Buat otomatisasi nav link yang aktif saat user scrolling */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    else document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
  });
}
window.addEventListener("scroll", scrollActive);

/* Ubah bg header*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // Ketika scrollnya lebih besar dari tinggi 200 viewport, kelas scroll-header bakal ditambahin ke tag headernya
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* Scroll ke atas */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Ketika scrollnya itu lebih tinggi daripada 560 viewport, kelas show-scrollnya nanti bakal ditambahin ke tag dengan kelas scroll-top
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* Mode gelap*/
const themeButton = document.getElementById("tombol-tema");
const darkTheme = "mode-gelap";
const iconTheme = "uil-sun";

// Tema sebelumnya yang dipake user
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Dapetin tema skrg dengan validasi class gelapnya interface
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "gelap" : "terang");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");

// Validasi ketika user sebelumnya udah milih tema
if (selectedTheme) {
  // semisal validasinya terpenuhi, cek apakah mode gelap aktif ato engga
  document.body.classList[selectedTheme === "gelap" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Aktivasi/deaktivasi tema secara manual dengan tombol
themeButton.addEventListener("click", () => {
  // tambah/hapus mode gelap/icon temanya
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // nyimpen tema dan juga icon yang telah dipilih sama usernya
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
