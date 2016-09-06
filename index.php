<?php

/**
 * Configuration
 */
return [

    /**
     * Unique name that identifies your theme.
     */
    'name' => 'heisenberg',

    /**
     * Define menu positions.
     * Will be listed in the backend so that users
     * can assign menus to these positions.
     */
    'menus' => [

        'main' => 'Main',

    ],

    /**
     * Define widget positions.
     * will be listed in the backend so that users
     * can publish widgets in these positions.
     */
    'positions' => [

        'side' => 'Sidebar',
		'top' => 'Top',
		'btm' => 'Bottom',
		'footer-menu' => 'Footer Menu',
		'footer-social' => 'Social Bar'

    ],
    
    'events' => [
	
	    'view.system/site/admin/settings' => function ($event, $view) use ($app) {
	        $view->script('site-theme', 'theme:app/bundle/site-theme.js', 'site-settings');
	        $view->data('$theme', $this);
	    },
	    'view.system/site/admin/edit' => function ($event, $view) {
	        $view->script('node-theme', 'theme:app/bundle/node-theme.js', 'site-edit');
	    },
	    'view.system/widget/edit' => function ($event, $view) {
		    $view->script('widget-theme', 'theme:app/bundle/widget-theme.js', 'widget-edit');
		}
	
	],

    /**
     * Define theme configuration.
     * This is the theme's default configuration. During run-time, they will be merged with
     * settings the user has set in the backend. The default configuration can therefore
     * be overwritten.
     */
    'config' => [
	    
	    'navbar_sticky' 			=> false,
	    'pos_top_bg' 				=> '',
	    'pos_top_widget_auto_size'	=> true,
	    'pos_top_bg_clr'			=> '#f5f5f5',
	    'pos_btm_bg' 				=> '',
	    'pos_btm_bg_clr'			=> '#f5f5f5',
	    'google_font'				=> 'Roboto',
	    'google_font_weight'		=>	'300,400,700',
	    'widget_auto_size'			=> true,
	    'theme-color'				=> 'yellow',
	    'copyright'					=> 'Copyright © <a href="http://www.ehrenwert-it.de" target="_blank">Ehrenwert-IT</a>'
	    
	],
	
	'node' => [
		
	    'pos_top_bg_overrite' 	=> '',
	    'pos_btm_bg_overrite' 	=> '',
	    'title_transform' 		=> false,
	    'title_hide' 			=> false,
	    'alignment' 			=> false,
	    'header_area'			=> false,
	    'header_img'			=> '',
	    'header_clr_overlay'	=> '',
	    'header_clr_overlay_trans' 	=> '0',
	    'header_full_height'	=> false,
	    'header_height' 		=> '',
	    'header_headline_1' 	=> '',
	    'header_headline_2' 	=> '',
	    'header_headline_align' => 'center',
	    'header_parallex'		=> false
	
	],
	
	'widget' => [
		
	    'panel' 		=> '',
	    'widget_size'	=> '',
	    'widget_push'	=> '',
	    'hide_headline'	=> false,
	    'hide_mobile'	=> false,
	    'color_invert'	=> false,
	    'widget_align'	=> 'left'
	
	]



];
