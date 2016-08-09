(function ($, Drupal) {

  Drupal.behaviors.netpunkt_fndt_reveal = {

    attach: function(context, settings) {

      $(window, context).bind("load", function () {

        // closing the offcanvas menu when popping a modal
        $(document, context).on('open.fndtn.reveal', '#ding-modal[data-reveal]', function () {
          console.log('modal-events: open');
          $('.exit-off-canvas', context).trigger('click');
          if (!Modernizr.touch) {
            // blur the background but only if we're aren't on a touch device as the blur effect is performance heavy
            addFilterOnMainwrapper();
          }
        });

        // attaching behaviors when the modal have finished opening
        $(document, context).on('opened.fndtn.reveal', '#ding-modal[data-reveal]', function () {
          console.log('modal-events: opened');
          toggleBehaviorsOnModal(true);
          Drupal.DingModal.addAccessibilityInfo(window.document);
          // onLoad.setFocus();
          toggleMainwrapperOnSmallDevices(false);
          $(document, context).foundation('reveal', 'reflow');
          if (typeof(Drupal.ajax) == "undefined") { console.log("Drupal.ajax is undefined"); }
          if (typeof(Drupal.settings.ding_modal) == "undefined") { console.log("Drupal.settings.ding_modal is undefined"); }
        });

        $(document, context).on('closed.fndtn.reveal', '#ding-modal[data-reveal]', function () {
          console.log('modal-events: closed');
          removeFilterOnMainwrapper();
          Drupal.DingModal.removeAccessibilityInfo();
          if (window.Foundation.reloadPageOnModalClose === 1) {
              window.location.href = document.URL;
          }
        });

        $(document, context).on('close.fndtn.reveal', '#ding-modal[data-reveal]', function () {
          console.log('modal-events: close');
          toggleBehaviorsOnModal(false);
          toggleMainwrapperOnSmallDevices(true);
        });

        function toggleMainwrapperOnSmallDevices(toggle){
          var $mainwrapper = $("#mainwrapper");
          if (toggle) {
            $mainwrapper.removeClass('hide-for-small-only');
          } else {
            $mainwrapper.addClass('hide-for-small-only');
          }
        }

        function toggleBehaviorsOnModal(toggle){
            var modal = document.getElementById('ding-modal');
            if (toggle) {
                Drupal.attachBehaviors(modal, null);
            } else {
                Drupal.detachBehaviors(modal, null, null);
            }
        }

        function addFilterOnMainwrapper(){
            var $mainwrapper = $("#mainwrapper");
            $mainwrapper.css("filter", "blur(2px)");
            $mainwrapper.css("-webkit-filter", "blur(2px)");
            $mainwrapper.css("-moz-filter", "blur(2px)");
            $mainwrapper.css("-o-filter", "blur(2px)");
            $mainwrapper.css("-ms-filter", "blur(2px)");
        }

        function removeFilterOnMainwrapper(){
            var $mainwrapper = $("#mainwrapper");
            $mainwrapper.css("filter", "");
            $mainwrapper.css("-webkit-filter", "");
            $mainwrapper.css("-moz-filter", "");
            $mainwrapper.css("-o-filter", "");
            $mainwrapper.css("-ms-filter", "");
        }

      });

    }

  };

})(jQuery, Drupal);
