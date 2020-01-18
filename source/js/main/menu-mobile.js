var menuBtn = document.querySelector(".header-navigation__button");
var menuNavigation = document.querySelector(".main-navigation__list");

menuBtn.classList.remove("header-navigation__button--close");
menuNavigation.classList.add("main-navigation__list--hidden");

var toggleMenu = function () {
  menuBtn.classList.toggle("header-navigation__button--close");
  menuNavigation.classList.toggle("main-navigation__list--hidden");
};

menuBtn.addEventListener("click", toggleMenu);
