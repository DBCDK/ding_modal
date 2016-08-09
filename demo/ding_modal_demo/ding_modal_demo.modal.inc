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
    'page callback' => 'ding_modal_demo_foo',
    'file' => 'ding_modal_demo.modal.inc', // relative path from ding_modal
    'selectors' => array(
      'a[href$="foo"]'
    )
  );

  $items['bar'] = array(
    'form_id' => 'ding_modal_demo_bar_form',
    'selectors' => array(
      'a[href$="bar"]'
    )
  );

  $items['baz'] = array(
    'form_id' => 'ding_modal_demo_baz_form',
    'selectors' => array(
      'a[href$="baz"]'
    )
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
    '#title' => 'Simple modal text document',
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


