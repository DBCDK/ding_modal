/**
 * Define one or more items that should be accesible as a modal window.
 * Basically this hook should return an array of menu items known from HOOK_menu()
 *
 * Below is used an example of how the hook is implemented.
 *
 * Set as a minimum, either:
 * '#replace' (the path to replace with 'ding_modal/key'), and '#form' should be set.
 * Or:
 * '#replace', and 'page callback' should be set.
 *
 * @return array
 */

function HOOK_ding_modal_menus(){

  $items['key1'] = array(
    '#replace' => 'foo/bar,
    'page callback' => 'foo_page_callback',
    'file' => '../foo_module/foo_module.page.inc', // relative to ding_modal
  );

  $items['key2'] = array(
    '#replace' => 'ding_modal_demo/bar',
    '#form' => 'ding_modal_demo_bar_form',
  );

  return $items;

}
