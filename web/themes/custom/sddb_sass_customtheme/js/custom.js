/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.sddb_sass_customtheme = {
    attach: function (context, settings) {

      // Custom code here


      // Back to top button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });

      $('.back-to-top').click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
      });

      // venobox
      $(document).ready(function () {
        if ($(".venobox")[0]) {

          $('.venobox').venobox();
        }
      });

    }
  };

})(jQuery, Drupal);