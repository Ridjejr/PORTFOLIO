function toggleMenu() {
  // sert à ouvrir et fermer le menu
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800, // Durée de l'animation en millisecondes
    offset: 200, // Décalage par rapport au défilement avant que l'élément ne devienne visible
  });
});
