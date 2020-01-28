var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav__nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map', {
//           center: [59.938631, 30.323055],
//           zoom: 17,
//           controls: ['zoomControl']
//       }, {
//           searchControlProvider: 'yandex#search'
//       }),

//       // Создаём макет содержимого.
//       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//       ),

//       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//           hintContent: 'Адрес интернет-магазина "Мишка" на карте',
//           balloonContent: 'г. Санкт-Петербург, ул. Большая Конюшеная, д. 19.8, офис 101'
//       }, {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: 'default#image',
//           // Своё изображение иконки метки.
//           iconImageHref: '../img/icon-map-pin.svg',
//           // Размеры метки.
//           iconImageSize: [67, 100],
//           // Смещение левого верхнего угла иконки относительно
//           // её "ножки" (точки привязки).
//           iconImageOffset: [-5, -38]
//       });


//       myMap.behaviors.disable('scrollZoom');
//   myMap.geoObjects
//       .add(myPlacemark);
// });
