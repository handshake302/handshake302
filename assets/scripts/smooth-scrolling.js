/*!
 * Smooth Scrolling - jQuery for Smooth Scrolling (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
 * For details, see https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */

(function($) {
    "use strict"; // Start of use strict

  // jQuery for page scrolling 
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

})(jQuery); // End of use strict