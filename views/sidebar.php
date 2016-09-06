<?php
	
	foreach ($widgets as $widget) :
	
	$hide_headline 	= $widget->theme['hide_headline'];
?>
	
	<div>
	
	    <div class="uk-panel <?= $widget->theme['panel'] ?>">
	
	        <h3 class="uk-panel-title <?= $hide_headline ?>"><?= $widget->title ?></h3>
	
	        <?= $widget->get('result') ?>
	
	    </div>
	
	</div>

<?php endforeach ?>