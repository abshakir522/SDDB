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


      // venobox
      $(document).ready(function () {
        $('.venobox').venobox();
      });


    }
  };

})(jQuery, Drupal);