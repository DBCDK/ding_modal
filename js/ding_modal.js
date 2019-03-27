(function ($) {

  var DingModal = {};

  DingModal.detachBehaviorsOnModal = function (reattach) {
    var reattach = reattach || false;
    var modal = document.getElementById('ding-modal');
    Drupal.detachBehaviors(modal, null, null);
    if (reattach) {
      DingModal.attachBehaviorsOnModal();
    }
  };

  DingModal.attachBehaviorsOnModal = function () {
    var modal = document.getElementById('ding-modal');
    Drupal.attachBehaviors(modal, null);
  };

  DingModal.setLinkActions = function (context) {

    if (Drupal.settings.ding_modal) {
      // Rewrite links
      for (var i in Drupal.settings.ding_modal.ding_modal_settings) {
        if (Drupal.settings.ding_modal.ding_modal_settings.hasOwnProperty(i)) {
          for (var n in Drupal.settings.ding_modal.ding_modal_settings[i].selectors) {
            var id = Drupal.settings.ding_modal.ding_modal_settings[i].id;
            var selector = Drupal.settings.ding_modal.ding_modal_settings[i].selectors[n];
            $(selector, context).once('ding-modal', function () { // adds a ding-modal-processed class
              $(selector).attr({
                'data-reveal-id': 'ding-modal',
                'data-reveal-ajax': 'true'
              }).addClass('use-ajax');
            });
          }
        }
      }
    } else {
      console.log('WARNING: Drupal.settings.ding_modal is undefined');
    }
  };


  /**
   * Handling printing from modal window.
   */
  DingModal.printing = function () {

    var dingModal = $("#ding-modal");
    var top = dingModal.css("top");

    $(window).bind("beforeprint", function () {
      if (dingModal.is(":visible")) {
        $("#mainwrapper").css("display", "none");
        dingModal.css("top", "0");
        $(".close-reveal-modal").css("visibility", "hidden");
      }
    });

    $(window).bind("afterprint", function () {
      if (dingModal.is(":visible")) {
        $("#mainwrapper").css("display", "");
        dingModal.css("top", top);
        $(".close-reveal-modal").css("visibility", "visible");
      }
    });

  };

  DingModal.addAccessibilityInfo = function (context) {
    var $modal = $("#ding-modal", context);
    $modal.attr("aria-hidden", false);
    $modal.attr("role", 'dialog');
  };

  DingModal.removeAccessibilityInfo = function () {
    var $modal = $("#ding-modal");
    $modal.attr("aria-hidden", true);
    $modal.removeAttr("role");
  };

  Drupal.behaviors.ding_modal = {
    attach: function (context, settings) {
      DingModal.setLinkActions(context);
    }
  }

  Drupal.DingModal = DingModal;

  $(document).ready(function () {
    DingModal.printing();
  });

})(jQuery);
