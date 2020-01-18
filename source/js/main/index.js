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
