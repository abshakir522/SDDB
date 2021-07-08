/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.sddb_sass_venobox = {
    attach: function (context, settings) {


      // Initiate the venobox plugin
      $(window).on('load', function () {
        $('.venobox').venobox();
      });

    }
  };

})(jQuery, Drupal);