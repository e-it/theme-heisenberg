<!DOCTYPE html>
<?php
	
// Params
$root					= $view->url()->get();
$title					= $params['title'];
$logo					= $params['logo'];
$theme_color			= $params['theme_color'];
$navbar_sticky			= $params['navbar_sticky'];
$pos_top_bg				= $params['pos_top_bg'];
$pos_top_bg_overrite	= $params['pos_top_bg_overrite'];
$pos_top_bg_clr			= $params['pos_top_bg_clr'];
$pos_btm_bg				= $params['pos_btm_bg'];
$pos_btm_bg_overrite	= $params['pos_btm_bg_overrite'];
$pos_btm_bg_clr			= $params['pos_btm_bg_clr'];

// Prüft ob ein Overrite für Top exestiert
if($pos_top_bg_overrite || $pos_top_bg || $pos_top_bg_clr) {
	$image_url	= $pos_top_bg_overrite ? $pos_top_bg_overrite : $pos_top_bg;
	$pos_top_bg = ' style="background-color: '.$pos_top_bg_clr .'; background-image: url(' .$root .$image_url .')"'; 
}

// Prüft ob ein Overrite für BTM exestiert
if($pos_btm_bg_overrite || $pos_btm_bg || $pos_btm_bg_clr) {
	$image_url	= $pos_btm_bg_overrite ? $pos_btm_bg_overrite : $pos_btm_bg;
	$pos_btm_bg = ' style="background-color: '.$pos_btm_bg_clr .'; background-image: url(' .$root .$image_url .')"'; 
}

$header_area			= $params['header_area'];

$header_img				= $params['header_img'];
$header_clr_overlay		= trim($params['header_clr_overlay']);
$header_clr_overlay_trans = $params['header_clr_overlay_trans'];
$header_full_height		= $params['header_full_height'];
$header_height			= $params['header_height'];
$header_headline_1		= trim($params['header_headline_1']);
$header_headline_2		= trim($params['header_headline_2']);
$header_align			= $params['header_headline_align'];
$header_parallex		= $params['header_parallex'];

if($header_full_height) {
	$header_full_height = 'tm-header-full-height';
}

if($header_parallex) {
	$header_parallex = 'data-uk-parallax="{bg: -400}"';
}

$google_font			= $params['google_font'];
$google_font_weight		= $params['google_font_weight'];
$copyright				= $params['copyright'];

$sticky = 'data-uk-sticky="{media:766,showup:true,animation:\'uk-animation-slide-top\'}"';
/*
echo '<pre style="max-height: 300px;>';
print_r($params);
echo '</pre>';
*/
?>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?= $view->render('head') ?>
        <?php $view->style('theme', 'theme:css/' .$theme_color .'.css') ?>
	<?php if($google_font) : ?>
        <?php $view->style('google-font', 'https://fonts.googleapis.com/css?family=' .$google_font .':' .$google_font_weight .'" rel="stylesheet') ?>
        <style>
	        * {
		        font-family: <?= $google_font ?>!important;
	        }
	    </style>
	<?php endif; ?>
        <style>
	        #top-header {
				<?=$header_height ? 'height: ' .$header_height .'px' : ''?>;
			}
	        .tm-header-img {
				background-image: url('<?=$header_img?>');
				background-size: cover;
				background-position: 50% 50%;
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
			}
	    </style>
		<?php $view->script('theme', 'theme:js/theme.js', ['uikit', 'jquery','uikit-sticky', 'uikit-lightbox','uikit-parallax']) ?>
    </head>
    <body id="up">
	    <div class="tm-header-container">
			<div class="uk-position-z-index" <?= $navbar_sticky ? $sticky : '' ?> >
			    <header id="header" class="tm-header uk-navbar">
				    <div class="uk-container uk-container-center">
					    <nav class="uk-navbar">
					        <!-- Render logo or title with site URL -->
					        <a class="uk-navbar-brand" href="<?= $view->url()->get() ?>">
					            <?php if ($logo) : ?>
					                <img src="<?= $this->escape($logo) ?>" alt="">
					            <?php else : ?>
					                <?= $title ?>
					            <?php endif ?>
					        </a>
					        <?php if ($view->menu()->exists('main')) : ?>
					        	<button class="uk-button uk-button-primary uk-float-right uk-visible-small" data-uk-offcanvas="{target:'#offcanvas'}"><i class="uk-icon-bars"></i></button>
						        <div id="mainmenu" class="uk-navbar-flip uk-hidden-small">
						            <?= $view->menu('main', 'menu-navbar.php') ?>
						        </div>
					        <?php endif ?>
				        </nav>
				    </div>
			    </header>
			</div>
		</div>
	    <main id="content" class="tm-content">
		    
		<?php if ($header_area) : ?>
			<div id="top-header" class="<?=$header_full_height?>">
				<div id="header-overlay" class="tm-header-overlay" style="background-color: <?=$header_clr_overlay?>; opacity: <?=$header_clr_overlay_trans?>;"></div>
				<div id="header-img" class="tm-header-img uk-block uk-cover-background <?=$header_full_height?>" <?=$header_parallex?>></div>
			<?php if($header_headline_1 || $header_headline_2) : ?>
				<div id="header-headline" class="tm-header-headline uk-position-cover uk-flex uk-flex-<?=$header_align?> uk-flex-middle">
					<div class="uk-container uk-container-center" style="width: 100%;">
			        	<section class="uk-grid uk-grid-match uk-grid-width-1-1" data-uk-grid-margin>
							<div class="uk-grid-width-1-1">
								<?php if($header_headline_1) : ?>
									<div id="headline1" class="tm-headline1 uk-text-<?=$header_align?>">
										<?=$header_headline_1?>
									</div>
								<?php endif ?>
								<?php if($header_headline_2) : ?>
									<div id="headline2" class="tm-headline2 uk-text-<?=$header_align?>">
										<?=$header_headline_2?>
									</div>
								<?php endif ?>
							</div>
					    </section>
					</div>
				</div>
			<?php endif ?>
			</div>
		<?php endif ?>
		    
		<?php if ($view->position()->exists('top')) : ?>
			<div id="pos-top" class="tm-pos-top uk-block uk-cover-background" <?= $pos_top_bg ?>>
			    <div class="uk-container uk-container-center">
			        <section class="uk-grid uk-grid-match" data-uk-grid-margin>
			            <?= $view->position('top', 'position-grid.php') ?>
			        </section>
			    </div>
			</div>
		<?php endif ?>
		
			<div id="tm-main" class="tm-main uk-block">
				<div class="uk-container uk-container-center">
					<div class="uk-grid">
						<div class="<?= $view->position()->exists('side') ? 'uk-width-medium-3-4' : 'uk-width-1-1'; ?>">
					        <!-- Render content -->
					        <?= $view->render('content') ?>
						</div>
						
				        <!-- Render widget position -->
				        <?php if ($view->position()->exists('side')) : ?>
				        <aside class="uk-width-medium-1-4">
				            <?= $view->position('side', 'sidebar.php') ?>
				        </aside>
				        <?php endif; ?>
					</div>
				</div>
			</div>
	
		<?php if ($view->position()->exists('btm')) : ?>
			<div id="pos-btm" class="tm-pos-btm uk-block uk-cover-background" <?= $pos_btm_bg ?>>
			    <div class="uk-container uk-container-center">
			        <section class="uk-grid uk-grid-match" data-uk-grid-margin>
			            <?= $view->position('btm', 'position-grid.php') ?>
			        </section>
			    </div>
			</div>
		<?php endif ?>
	    </main>
		<footer class="tm-footer">
			<div class="uk-container uk-container-center">
				<section class="uk-grid">
					<div class="uk-width-medium-1-2">
						<div id="copyright">
							<?= $copyright ?>
						</div>
						<div class="tm-footer-menu">
							<?= $view->position('footer-menu','position-grid.php') ?>
						</div>
					</div>
				<?php if ($view->position()->exists('footer-social')) : ?>
					<div class="uk-width-medium-1-2 tm-social">
						<?= $view->position('footer-social','position-grid.php') ?>
					</div>
				<?php endif ?>
				</section>
			</div>
		</footer>
		<div id="offcanvas" class="uk-offcanvas" aria-hidden="true">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-flip">
				<?= $view->menu('main', 'menu-navbar-offcanvas.php') ?>
			</div>
		</div>
    </body>
</html>
