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
  breakpoint = 'mobile';
  if (window.innerWidth >= 768) {
    breakpoint = 'tablet';
  }
  if (window.innerWidth >= 1300) {
    breakpoint = 'desktop';
  }
};
setBreakpoint();

window.ymaps.ready(function () {
  var map = new window.ymaps.Map(`map`, {
    center: centers[breakpoint],
    controls: [],
    zoom: zooms[breakpoint]
  });

  var placemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: "наш магазин"
  }, {
    iconLayout: `default#image`,
    iconImageHref: `img/map-pin.png`,
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
