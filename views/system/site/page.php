<?php
	$align			= $node->theme['alignment'];
	$title_hide		= $node->theme['title_hide'];
	$title_transform= $node->theme['title_transform'];
?>

<article class="uk-article<?= $align ? ' uk-text-center' : '' ?>">

    <?php if (!$title_hide) : ?>
    <h1 <?= $title_transform ? 'class="uk-h2"' : '' ?>><?= $page->title ?></h1>
    <?php endif ?>

    <?= $page->content ?>

</article>
