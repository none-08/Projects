$('.btn-toggle').click(function () {
   $('.mymenu_drop-down').slideToggle()
});
$('.owl-carousel').owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
});

$(window).scroll(function () {

   var scroll_qiymat = $(window).scrollTop();
   if (scroll_qiymat > 200) {
      $('.header-main').addClass('fixed');
   } else {
      $('.header-main').removeClass('fixed')
   }

});

// OFFcanvas
$('#btn-open').click(function () {
   $('.offcanvas-menu').addClass("show");
   $('.overlay').show()
});
$('.overlay, #btn-close').click(function () {
   $('.offcanvas-menu').removeClass('show');
   $('.overlay').hide();
});

var options = {
   data: ["Samsung", "Iphone", "Xiaomi", "Television", "Hp"]
};

$("#products").easyAutocomplete(options);