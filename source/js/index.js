var sliderInputRange = document.querySelector("#range-slider");
var sliderImageBefore = document.querySelector(".slider__slide--before");

if (sliderInputRange && sliderImageBefore) {
  var hiddenImage = function () {
    sliderImageBefore.style.width = (100 - sliderInputRange.value) + "%";
  };

  hiddenImage();

  sliderInputRange.addEventListener("input", hiddenImage);
}
