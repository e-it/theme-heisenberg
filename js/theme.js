jQuery(document).ready(function($) {
	var full_header = function() {
		var fullsize = $('.tm-header-full-height');
		
		fullsize.css({
			height: $(window).height() - $('#header').outerHeight()
		});
	};
	full_header();
	jQuery(window).resize(full_header);
});