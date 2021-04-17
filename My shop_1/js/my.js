$(document).ready(function () {
   $("#slider").owlCarousel({
      loop: true,
      items: 1,
      nav: true,
      autoplay: true,
   });
});
$(document).ready(function () {
   $("#slider2").owlCarousel({
      loop: true,
      items: 5,
      nav: true,
      autoplay: false,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 3
         },
         1000: {
            items: 5
         }
      }
   });
});
$('#js-megamenu, .background-overlay').click(function () {
   $('.megamenu, .background-overlay, .icon-close, .icon-active').toggle();
});
