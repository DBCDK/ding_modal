(function($) {

  var DingModal = {};

  DingModal.detachBehaviorsOnModal = function(reattach) {
    var reattach = reattach || false;
    var modal = document.getElementById('ding-modal');
    Drupal.detachBehaviors(modal, null, null);
    if (reattach) {
      DingModal.attachBehaviorsOnModal();
    }
  };

  DingModal.attachBehaviorsOnModal = function() {
    var modal = document.getElementById('ding-modal');
    Drupal.attachBehaviors(modal, null);
  };

  DingModal.rewritelinks = function(ding_modal_setting, context) {
    var selectors = ding_modal_setting.selectors.join();
    // Rewrite link
   // $(selectors, context).attr({
    $(selectors).attr({
      'data-reveal-id': 'ding-modal',
      'data-reveal-ajax': 'true'
    }).addClass('ding-modal-' +  ding_modal_setting.id).addClass('use-ajax');
  };

  DingModal.setLinkActions = function(context) {
    if (Drupal.settings.ding_modal) {
      // Rewrite links
      for (var i in Drupal.settings.ding_modal.ding_modal_settings) {
          if (Drupal.settings.ding_modal.ding_modal_settings.hasOwnProperty(i)) {
              DingModal.rewritelinks(Drupal.settings.ding_modal.ding_modal_settings[i], context);
          }
      }
    } else {
      console.log('WARNING: Drupal.settings.ding_modal is undefined');
    }
  };

  DingModal.addAccessibilityInfo = function(context) {
    var $modal = $("#ding-modal", context);
    $modal.attr("aria-hidden", false);
    $modal.attr("role", 'dialog');
  };

  DingModal.removeAccessibilityInfo = function() {
    var $modal = $("#ding-modal");
    $modal.attr("aria-hidden", true);
    $modal.removeAttr("role");
  };

  Drupal.behaviors.ding_modal = {
    attach: function(context, settings) {
      DingModal.setLinkActions(context);
    },

    detach: function(context) {
      DingModal.removeAccessibilityInfo(context);
    }

  };

  Drupal.DingModal = DingModal;

})(jQuery);
