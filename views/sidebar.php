<?php
	
	foreach ($widgets as $widget) :
	
	$hide_headline 	= $widget->theme['hide_headline'];
?>
	
	<div>
	
	    <div class="uk-panel <?= $widget->theme['panel'] ?>">
		<?php if (!$hide_headline) : ?>
	        	<h3 class="uk-panel-title <?= $hide_headline ?>"><?= $widget->title ?></h3>
		<?php endif; ?>
	        <?= $widget->get('result') ?>
	
	    </div>
	
	</div>

<?php endforeach ?>
