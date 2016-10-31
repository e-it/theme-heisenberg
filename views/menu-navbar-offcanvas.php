<?php if ($root->getDepth() === 0) : ?>
<ul class="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav>
<?php endif ?>
<?php if ($root->getDepth() === 0) : ?>
	<?php foreach ($root->getChildren() as $node) : ?>
		<?php if(!$node->hasChildren() ): ?>
			<li class="<?= $node->get('active') ? ' uk-active' : '' ?>"><a href="<?= $node->getUrl() ?>"><?= $node->title ?></a></li>
		<?php endif; ?>
		<?php if($node->hasChildren() ): ?>
  		<li class="uk-parent <?= $node->get('active') ? ' uk-active' : '' ?>">
        	<a href="#"><?= $node->title ?></a>
        	<ul class="uk-nav-sub">
            	<?= $view->render('menu-navbar.php', ['root' => $node]) ?>
        	</ul>
    	</li>		
		<?php endif; ?>
	<?php endforeach; ?>
<?php endif; ?>
