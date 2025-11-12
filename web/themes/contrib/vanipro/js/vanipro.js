if ( jQuery('.slider-classic').length > 0 ) {
  var slider = tns({
    container: '.slider-classic',
    mode: "gallery",
    items: 1,
    slideBy: 'page',
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutLeft',
    speed: 600,
    autoplay: true,
    controls: false,
    navPosition: "bottom",
    autoplayButtonOutput: false,
  });
}
if ( jQuery('.slider-layer').length > 0 ) {
  var slider = tns({
    container: '.slider-layer',
    mode: "gallery",
    items: 1,
    slideBy: 'page',
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutLeft',
    speed: 600,
    autoplay: true,
    autoplayTimeout: 10000,
    controls: false,
    navPosition: "bottom",
    autoplayButtonOutput: false,
  });
}
if ( jQuery('.testimonials').length > 0 ) {
  var slider = tns({
    container: '.testimonials',
    items: 3,
    autoplay: true,
    nav: false,
    controlsPosition: 'bottom',
    autoplayButtonOutput: false,
    "responsive": {
      "300": {
        "items": 1
      },
      "500": {
        "items": 2
      },
      "768": {
        "items": 3
      }
    },
  });
}
if ( jQuery('.gallery-slider, .gallery-slider1, .gallery-slider2, .gallery-slider3, .gallery-slider4, .gallery-slider5').length > 0 ) {
  var slider = tns({
    container: '.gallery-slider, .gallery-slider1, .gallery-slider2, .gallery-slider3, .gallery-slider4, .gallery-slider5',
    mode: "gallery",
    items: 1,
    slideBy: 'page',
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutLeft',
    speed: 600,
    autoplay: true,
    autoplayTimeout: 10000,
    controls: false,
    navPosition: "bottom",
    autoplayButtonOutput: false,
  });
}
if ( jQuery('.clients').length > 0 ) {
  var slider = tns({
    container: '.clients',
    items: 3,
    autoplay: true,
    nav: false,
    controlsPosition: 'bottom',
    autoplayButtonOutput: false,
    "responsive": {
      "300": {
        "items": 1
      },
      "500": {
        "items": 2
      },
      "768": {
        "items": 3
      }
    },
  });
}
/* Prepage loader
--------------------------*/
jQuery(window).on('load', function() {
  jQuery(".loader").delay(1000).fadeOut( 'slow' );
});
/* Load jQuery.
--------------------------*/
jQuery(document).ready(function ($) {
  // Mobile menu.
  $('.mobile-menu').click(function () {
    $(this).next('.primary-menu-wrapper').toggleClass('active-menu');
  });
  $('.close-mobile-menu').click(function () {
    $(this).closest('.primary-menu-wrapper').toggleClass('active-menu');
  });

  // Full page search.
  $('.search-icon').on('click', function() {
    $('.search-box').addClass('open');
    return false;
  });

  $('.search-box-close').on('click', function() {
    $('.search-box').removeClass('open');
    return false;
  });

  // Sliding sidebar.
  $('.sliding-panel-icon').click(function () {
    $('.sliding-sidebar').toggleClass('animated-panel-is-visible');
  });
  $('.close-animated-sidebar').click(function () {
    $('.sliding-sidebar').removeClass('animated-panel-is-visible');
  });

  // Scroll To Top.
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $('.scrolltop').css('display', 'grid');
    } else {
      $('.scrolltop').fadeOut('slow');
    }
  });
  $('.scrolltop').click(function () {
    $('html, body').scrollTop(0);
  });

  // Wrap homepage blocks
  $(".region-content-home .block").wrapInner( '<div class="container"></div>' );
  $(".region-content-home .block:nth-child(even)").prepend( '<div class="home-block-cicle1"></div><div class="home-block-cicle2"></div><div class="home-block-cicle3"></div>' );

  // Sidebar block circle
  $(".sidebar .block").prepend('<div class="sidebar-circle-two"></div><div class="sidebar-circle-one"></div>');

  /*
   * ELements
   */
  // Elements -> Toggle.
  $(".toggle-content").hide();
  $(".toggle-title").click(function() {
    $(this).next('.toggle-content').slideToggle(300);
    $(this).toggleClass('active-toggle');
    return false;
  });

  // Elements -> Accordion.
  var accordion_head = $(".accordion-title"), accordion_para = $(".accordion-content"); // select heading and para and save as variable
	accordion_para.hide(); // hide all para
	accordion_head.click(function() {
		var current = $(this); // save the heading for easy referral
		if ( current.next(".accordion-content").is(":hidden") ) {
			current.siblings(".accordion-content").slideUp();
			current.next(".accordion-content").slideDown();
			current.siblings(".accordion-title").removeClass('active-accordion'); // remove active-accordion class from all siblings titles
			current.addClass("active-accordion"); // add class active-accordion to clicked title
		} else {
			current.next(".accordion-content").slideUp();
			current.removeClass("active-accordion"); // add class active-accordion to clicked title
		}
  });
/* End document
--------------------------*/
});
