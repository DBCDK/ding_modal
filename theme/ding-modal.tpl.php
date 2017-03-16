<?php
 /**
  * @file
  * Theme file for the basic ding modal
  *
  * Available variables:
  *   - $title: The of the modal
  *   - $content: The rendered content that should be displayed within the modal.
  */
?>

<div id="ding-modal-form">
  <div id="ding-modal-header">
    <span class="ding-modal-title"><?php print $title; ?></span>
    <a class="close-reveal-modal">&#215;</a>
  </div>
  <div id="ding-modal-messages">
    <?php print theme('status_messages'); ?>
  </div>
  <div id="ding-modal-content">
    <?php print drupal_render($content); ?>
  </div>
</div>
