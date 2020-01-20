var form = document.querySelector(".form");

if (form) {
  var submitFormButton = form.querySelector(".form__btn");
  var nameInput = form.querySelector("#name-cat");
  var weightInput = form.querySelector("#weight-cat");
  var mailInput = form.querySelector("#master__e-mail");
  var svgMailInput = form.querySelector(".form__master-svg--mail");
  var phoneInput = form.querySelector("#master__phone");
  var svgPhoneInput = form.querySelector(".form__master-svg--phone");
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
  svgMailInput.style.fill = "#68b738";
  testMail();
};

var mailInputBlurHandler = function (evt) {
  svgMailInput.style.fill = null;
};

var phoneInputChangeHandler = function (evt) {
  removeErrorStyle(evt);
  svgPhoneInput.style.fill = "#68b738";
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
    nameInput.style.boxShadow = "0 0 3px #ff8282";
  }
  if (!checkWeightInputValidity()) {
    weightInput.style.boxShadow = "0 0 3px #ff8282";
  }
  if (!checkMailInputValidity()) {
    mailInput.style.boxShadow = "0 0 3px #ff8282";
    svgMailInput.style.fill = "#ff8282";
  }
  if (!checkPhoneInputValidity()) {
    phoneInput.style.boxShadow = "0 0 3px #ff8282";
    svgPhoneInput.style.fill = "#ff8282";
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
  mailInput.addEventListener("blur", mailInputBlurHandler);
}

if (phoneInput) {
  phoneInput.addEventListener("input", phoneInputChangeHandler);
}

if (form) {
  form.addEventListener("submit", formSubmitHendler);
}

var sliderInputRange = document.querySelector("#range-slider");
var sliderImageBefore = document.querySelector(".slider__slide--before");
var setBreakpoint = function () {
  if (window.innerWidth > 768 && window.innerWidth < 1300) {
    sliderInputRange.value = 50;
    sliderImageBefore.style.width = sliderInputRange.value + "%";
  } else {
    sliderInputRange.value = 50;
    sliderImageBefore.style.width = sliderInputRange.value + "%";
  }
};

if (sliderInputRange && sliderImageBefore) {
  var hiddenImage = function () {
    sliderImageBefore.style.width = (100 - sliderInputRange.value) + "%";
  };

  hiddenImage();

  sliderInputRange.addEventListener("input", hiddenImage);
  window.addEventListener("resize", setBreakpoint);
}

var centers = {
  mobile: [59.938631, 30.323055],
  tablet: [59.938715, 30.323078],
  desktop: [59.938590, 30.319770]
};
var zooms = {
  mobile: 17,
  tablet: 18,
  desktop: 17
};
var mapBlock = document.querySelector(".map");
var breakpoint;
var setBreakpoint = function () {
  breakpoint = "mobile";
  if (window.innerWidth >= 768) {
    breakpoint = "tablet";
  }
  if (window.innerWidth >= 1300) {
    breakpoint = "desktop";
  }
};
setBreakpoint();

window.ymaps.ready(function () {
  var map = new window.ymaps.Map("map", {
    center: centers[breakpoint],
    controls: [],
    zoom: zooms[breakpoint]
  });

  var placemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: "наш магазин"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/map-pin.png",
    iconImageSize: [113, 106],
    iconImageOffset: [-53, -120]
    });

  map.geoObjects.add(placemark);
  map.behaviors.disable("scrollZoom");

  window.addEventListener("resize", function () {
    setBreakpoint();
    map.setCenter(centers[breakpoint], zooms[breakpoint]);
  });
});

var menuBtn = document.querySelector(".header-navigation__button");
var menuNavigation = document.querySelector(".main-navigation__list");

menuBtn.classList.remove("header-navigation__button--close");
menuNavigation.classList.add("main-navigation__list--hidden");

var toggleMenu = function () {
  menuBtn.classList.toggle("header-navigation__button--close");
  menuNavigation.classList.toggle("main-navigation__list--hidden");
};

menuBtn.addEventListener("click", toggleMenu);
