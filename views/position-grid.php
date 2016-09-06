<?php
		
	$widget_auto_size	= $params['widget_auto_size'];
	
	foreach ($widgets as $widget) : 
	
	$widget_size 	= trim($widget->theme['widget_size']);
	$widget_push 	= trim($widget->theme['widget_push']);
	$hide_headline 	= $widget->theme['hide_headline'];
	$hide_mobile 	= $widget->theme['hide_mobile'];
	$widget_align	= $widget->theme['widget_align'];
	$color_invert	= $widget->theme['color_invert'];
	$clr_headline	= '';
	
	// Automatische Breite oder manuell
	if($widget_auto_size) {
		$widget_size = 'uk-width-medium-1-' .count($widgets);
	} else {
		$widget_size ? $widget_size = 'uk-width-medium-' .$widget_size : 'uk-width-medium-1-1';
		$widget_push ? $widget_push = ' uk-push-' .$widget_push : '';
	}
	
	$hide_mobile ? $hide_mobile = ' uk-hidden-small' : '';
	$color_invert ? $color_invert = ' uk-text-contrast' : '';

?>
	
	<div class="<?= $widget_size .$widget_push .$hide_mobile ?>">
	
	    <div class="uk-panel <?= $widget->theme['panel'] ?>">
			
		<?php if(!$hide_headline) : ?>
	        <h3 class="uk-panel-title <?= $color_invert ?>"><?= $widget->title ?></h3>
		<?php endif ?>
			<div class="<?= $color_invert ?>">
				<?= $widget->get('result') ?>
			</div>
	    </div>
	
	</div>

<?php endforeach ?>