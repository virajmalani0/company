$(document).ready(function () {

     $('#banner').owlCarousel({
          loop: true,
          margin: -1,
          nav: true,
          navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
          center: true,
          smartSpeed: 2000,
          stagePadding: 120,
          autoplay: true,
          autoplayTimeout: 6000,
          dots:false,
          responsive:{
               0: {
                    items: 1
               },
               600: {
                    items: 3
               },
               1000: {
                    items: 1
               }
          }
     });

     

     $('#customer').owlCarousel({
         loop:true,
         margin:10,
         nav:false,
         dots: true,
         center:true,
         smartSpeed: 2000,
         autoplay: true,
         autoplayTimeout: 3000,
         items: 1,
     });

     $('#swipe_slider').owlCarousel({
          loop:true,
          margin:10,
          // items: 1,
          nav:false,
          dots:false,
          autoplay: true,
          autoplayTimeout: 1900,
          smartSpeed: 2000,
          slideTransition: 'linear',
          
      });

     var owl = $('#banner');
     owl.owlCarousel();
     // Listen to owl events:
     owl.on('changed.owl.carousel', function (event) {
          new WOW().init();
     })
     wow = new WOW(
          {
               boxClass: 'wow',      // default
               animateClass: 'animated', // default
               offset: 0,          // default
               mobile: true,       // default
               live: true        // default
          }
     )
     wow.init(); 

     $(window).scroll(function(){
          var sticky = $('.sticky'),
              scroll = $(window).scrollTop();
        
          if (scroll >= 100){
               sticky.addClass('fixed');
          }
          else{ 
               sticky.removeClass('fixed');
          }
     });
});
