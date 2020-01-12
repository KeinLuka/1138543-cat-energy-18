var form = document.querySelector(".form");

if (form) {
  var submitFormButton = form.querySelector(".form__btn");
  var nameInput = form.querySelector("#name-cat");
  var weightInput = form.querySelector("#weight-cat");
  var mailInput = form.querySelector("#master__e-mail");
  var phoneInput = form.querySelector("#master__phone");
  var mailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var mailInputRegEx = /[А-я]/g;
  var numberRegEx = /[^\d]/g;
  form.noValidate = true;
}


var testMail = function () {
  mailInput.value = mailInput.value.replace(mailInputRegEx, "");
};

var testPhone = function () {
  phoneInput.value = phoneInput.value.replace(numberRegEx, "");
};

var testWeight = function () {
  weightInput.value = weightInput.value.replace(numberRegEx, "");
};

var removeErrorStyle = function (evt) {
  evt.target.style = null;
};

var nameInputChangeHandler = function (evt) {
  removeErrorStyle(evt);
};

var weightInputChangeHandler = function (evt) {
  removeErrorStyle(evt);
  testWeight();
};

var mailInputChangeHandler = function (evt) {
  removeErrorStyle(evt);
  testMail();
};

var phoneInputChangeHandler = function (evt) {
  removeErrorStyle(evt);
  testPhone();
};

var checkNameInputValidity = function () {
  var flag = true;
  if (nameInput.value === "") {
    flag = false;
  }
  return flag;
};

var checkWeightInputValidity = function () {
  var flag = true;
  if (weightInput.value === "") {
    flag = false;
  }
  return flag;
};

var checkMailInputValidity = function () {
  var flag = true;
  if (!mailRegEx.test(mailInput.value)) {
    flag = false;
  }
  return flag;
};

var checkPhoneInputValidity = function () {
  var flag = true;
  if (phoneInput.value === "" || phoneInput.value.length < 6) {
    flag = false;
  }
  return flag;
};

var checkInputsValidity = function () {
  if (!checkNameInputValidity()) {
    nameInput.style.boxShadow = "0 0 3px red";
  }
  if (!checkWeightInputValidity()) {
    weightInput.style.boxShadow = "0 0 3px red";
  }
  if (!checkMailInputValidity()) {
    mailInput.style.boxShadow = "0 0 3px red";
  }
  if (!checkPhoneInputValidity()) {
    phoneInput.style.boxShadow = "0 0 3px red";
  }
};

var formSubmitHendler = function (evt) {
  checkInputsValidity();
  if (!checkNameInputValidity() || !checkWeightInputValidity() || !checkMailInputValidity() || !checkPhoneInputValidity()) {
    evt.preventDefault();
  }
};

if (nameInput) {
  nameInput.addEventListener("input", nameInputChangeHandler);
}

if (weightInput) {
  weightInput.addEventListener("input", weightInputChangeHandler);
}

if (mailInput) {
  mailInput.addEventListener("input", mailInputChangeHandler);
}

if (phoneInput) {
  phoneInput.addEventListener("input", phoneInputChangeHandler);
}

if (form) {
  form.addEventListener("submit", formSubmitHendler);
}

var sliderInputRange = document.querySelector("#range-slider");
var sliderImageBefore = document.querySelector(".slider__slide--before");

if (sliderInputRange && sliderImageBefore) {
  var hiddenImage = function () {
    sliderImageBefore.style.width = (100 - sliderInputRange.value) + "%";
  };

  hiddenImage();

  sliderInputRange.addEventListener("input", hiddenImage);
}

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(`map`, {
    center: [59.939,30.3194],
    zoom: 17
  });

  var placemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: "наш магазин"
  }, {
    iconLayout: `default#image`,
    iconImageHref: `img/map-pin.png`,
    iconImageSize: [113, 106],
    iconImageOffset: [-53, -120]
    });

  myMap.geoObjects.add(placemark);
}

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
