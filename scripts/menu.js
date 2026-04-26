var boutonMenu = document.querySelector(".menu-toggle");
var navMenu = document.querySelector(".site-nav");

boutonMenu.addEventListener("click", function () {
  var estOuvert = navMenu.classList.toggle("est-ouvert");
  boutonMenu.setAttribute("aria-expanded", estOuvert);
});
