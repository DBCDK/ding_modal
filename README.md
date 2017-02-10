/*
 * Ding modal readme
 *
 */

Defines a standard modal window, and an api for configuring a page to open in the modal window.

REQUIREMENTS:

Uses Foundation Reveal

Require an element on the page with id = 'ding-modal', f.ex.: 
html.tpl.php : <div id="ding-modal" class="reveal-modal" data-reveal aria-hidden="true" role="dialog"></div>

Uses hook_ding_modal_menus to collect menu data, which is used to rebuild menus,
  and replace links with menu items that are accessed with AJAX.

TROUBLESHOOTING:

['#ajax']['wrapper'] : 
- if the form is called multiple times, note that the form id is subject to drupal_unique(),
  and may be unsuitable as a wrapper.

EXAMPLES:

See the ding_modal_demo module.

