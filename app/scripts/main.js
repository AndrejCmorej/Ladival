var windowWidth;

jQuery(window).on('resize',function() {

  var windowWidth = jQuery(window).width();

});

jQuery(document).ready(function() {

  jQuery(window).trigger('resize');

  /* ==========================================================================
     Main menu toggle button
     ========================================================================== */

  function toggleMenu() {
    jQuery('.header__menubutton--1').find('.toggle').toggleClass('open');
    jQuery('body, header, html').toggleClass('menu-opened');
   }

  jQuery('header .header__menubutton--1').on('click', function() {
    toggleMenu();
  });

   function toggleAllmenu() {
    jQuery('.product').find('.product__all-menu').toggleClass('opened');
    jQuery('body, html').toggleClass('.product__all-menu opened');
   }
   jQuery('.product__title2').on('click', function() {
    toggleAllmenu();
  });

  /* ==========================================================================
     Main slider
     ========================================================================== */

    jQuery('.slider__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rows: 0,
        dots: true,
        arrows: true,
    });

    /* ==========================================================================
     Big slider
     ========================================================================== */

      jQuery('.slider-big__slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 0,
          dots: false,
          arrows: false,
      });

    /* ==========================================================================
       Anchor scroll
       ========================================================================== */

    jQuery('a[href*="#"]:not([href="#"])').on('click', function(e) {
      e.preventDefault();
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
        if (target.length) {

          jQuery('html,body').animate({

            scrollTop: target.offset().top

          }, 1000);
          return false;
        }
      }
    });

    /* ==========================================================================
       Menu scroll
       ========================================================================== */

      var previousScroll = 0;
      function checkScroll(scroll) {
        if( scroll > 80) {
          jQuery(".header").addClass("header--fixed");
          jQuery("body").addClass("scrolled");
        } else {
          jQuery(".header").removeClass("header--fixed");
          jQuery("body").removeClass("scrolled");
        }
      }

      // initialize
      var fromTop = jQuery(window).scrollTop();
      checkScroll(fromTop);

      // on scroll
      jQuery(window).scroll(function(){
        var currentScroll = jQuery(this).scrollTop();
        checkScroll(currentScroll);
      });

    /* ==========================================================================
       Masonry grid
       ========================================================================== */

      jQuery('.grid .grid__grid').masonry({
        itemSelector: '.grid__item',
        columnWidth: '.grid__grid-sizer',
        percentPosition: true,
    });
});
