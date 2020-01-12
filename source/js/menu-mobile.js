var headerNavigation = document.querySelector(".header-navigation");
var menuHidden =document.querySelector(".main-navigation--hidden")
var buttonMenu = headerNavigation.querySelector("#button");
var buttonMenuClose = headerNavigation.querySelector(".header-navigation__button--close");
var buttonMenuOpen = headerNavigation.querySelector(".header-navigation__button");
var menuNavigation = headerNavigation.querySelector(".main-navigation__list");



var Menu = function () {

  if (!buttonMenu.classList.contains("header-navigation__button--close")) {
      buttonMenuOpen.classList.add("header-navigation__button--close");
      menuNavigation.classList.remove("main-navigation__list--hidden");

  } else if (buttonMenu.classList.contains("header-navigation__button--close")) {
      buttonMenuClose.classList.remove("header-navigation__button--close");
      menuNavigation.classList.add("main-navigation__list--hidden");
  };

}

buttonMenu.addEventListener("click", Menu);
