<?php

/**
 * @file
 * Ding Modal Demo module, hook_ding_modal_menus implementation.
 */

/**
 * Implements hook_ding_modal_menus
 *
 * @return array
 */
function ding_modal_demo_ding_modal_menus() {

  $items['foo'] = array(
    '#replace' => 'ding_modal_demo/foo',
    'page callback' => 'ding_modal_demo_foo',
    'file' => 'demo/ding_modal_demo/ding_modal_demo.modal.inc', // relative path from ding_modal
  );

  $items['bar'] = array(
    '#replace' => 'ding_modal_demo/bar',
    '#form' => 'ding_modal_demo_bar_form',
  );

  $items['baz'] = array(
    '#replace' => 'ding_modal_demo/baz',
    '#form' => 'ding_modal_demo_baz_form',
  );

  return $items;

}


/**
 * Demo modal window page callback
 *
 * @return array
 */

function ding_modal_demo_foo() {

  $render = array(
    '#theme' => 'ding_modal_theme',
    '#title' => 'Fubar',
    '#content' => array(
      'foo' => array(
        '#markup' => t('Some basic text in a #markup'),
      ),
    ),
  );

  $commands[] = ajax_command_invoke('#ding-modal', 'foundation', array('reveal', 'open'));
  $commands[] = ajax_command_html('#ding-modal', drupal_render($render));

  return array('#type' => 'ajax', '#commands' => $commands);

}


function ding_modal_demo_bar_form() {

  $form['bar'] = array(
    '#type' => 'fieldset',
    '#collapsible' => FALSE,
  );

  $form['bar']['ding_modal_foo'] = array(
    '#type' => 'textfield',
    '#title' => t('Bar text', array(), array('context' => 'ding_modal')),
    '#size' => 15,
    '#default_value' => variable_get('ding_modal_foo', ''),
  );

  $form['bar']['ding_modal_bar'] = array(
    '#type' => 'checkbox',
    '#title' => t('Bar check', array(), array('context' => 'ding_modal')),
    '#default_value' => variable_get('ding_modal_bar', ''),
  );

  $form['bar']['ding_modal_baz'] = array(
    '#type' => 'submit',
    '#name' => 'op2',
    '#value' => t('Bar submit', array(), array('context' => 'ding_modal')),

  );

  $form['#submit'][] = 'ding_modal_demo_bar_form_submit';

  return system_settings_form($form);

}


/**
 * Validation handler for ding_modal_bar_form_demo
 */
function ding_modal_demo_bar_form_validate($form, &$form_state) {
  // Dummy validation for demo purpose.
}


/**
 * Submt handler for ding_modal_bar_form_demo
 */
function ding_modal_demo_bar_form_submit($form, &$form_state) {
  // Dummy submit for demo purpose.
}

