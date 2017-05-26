<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function restaurant_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
   $form['search_block_form']['#attributes']['placeholder'] = 'SEARCH';
    }
}