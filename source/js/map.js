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
