var sliderInputRange = document.querySelector("#range-slider");
var sliderImageBefore = document.querySelector(".slider__slide--before");

if (sliderInputRange && sliderImageBefore) {
  var hiddenImage = function () {
    sliderImageBefore.style.width = (100 - sliderInputRange.value) + "%";
  };

  hiddenImage();

  sliderInputRange.addEventListener("input", hiddenImage);
}

var setBreakpoint = function () {
  if (window.innerWidth >= 768) {
    sliderInputRange.value = 51;
    sliderImageBefore.style.width = 49 + "%";
  }
  if (window.innerWidth >= 1300) {
    sliderInputRange.value = 51;
    sliderImageBefore.style.width = 51 + "%";
  }
};

setBreakpoint();

window.addEventListener("resize", function () {
  setBreakpoint();
});
