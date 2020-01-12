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
