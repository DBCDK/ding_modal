<?php

/**
 * @file
 * Include file that contains callback methods and the helpers needed for
 * delivering forms in a ding-modal using Foundation Reveal.
 */


/**
 * Menu callback that returns the form wrapped in a modal.
 * If JavaScript is disabled in the client we will never get here as the login
 * link is being rewritten by client-side JavaScript.
 *
 * If the form hasn't been submitted rendered html will be returned. Otherwise
 * the output will be returned wrapped in one or more commands to have our
 * JavaScript handle it client-side.
 *
 * @return array|mixed
 */
function ding_modal_callback($modal_id) {

  $items = _ding_modal_invoke_menus();
  foreach ($items as $path => $item) {
    if ($item['#id'] == $modal_id && !empty($item['#form'])) {
      $form_id = $item['#form'];
    }
  }

  $form_state = _ding_modal_set_form_state();

  $output = ding_modal_form_wrapper($form_id, $form_state);

  ding_modal_deliver_output($output);

  $commands = array();
  if (empty($form_state['executed']) && empty($form_state['submitted'])) {
    $commands = $output;
  }
  elseif (empty($form_state['executed']) && !empty($form_state['submitted'])) {
    // Something went wrong. Replace the form currently displayed in the modal and let the user try again
    $commands[] = ding_modal_command_replace_form($output);
  }
  elseif (!empty($form_state['executed']) && !empty($form_state['submitted'])) {
    $commands[] = ding_modal_command_reload();
    $commands[] = ding_modal_command_dismiss();
  }

  ding_modal_deliver_output($commands);
}



/**
 * @return array
 */
function _ding_modal_set_form_state() {
  $form_state = array(
    'ajax' => TRUE,
  );

  return $form_state;
}