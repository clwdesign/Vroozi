(function ($, Drupal, window, document, undefined) {
	$(document).ready(function() {
		$('#block-system-user-menu').before('<div id="popup-menu-button"><a>Menu</a></div>');
		$('#popup-menu-button a').click(function() {
			if ($('#block-system-user-menu').hasClass('visible')) {
				$('#block-system-user-menu').removeClass('visible').animate({
					right: '-=210px'
				});
			} else {	
				$('#block-system-user-menu').addClass('visible').animate({
					right: '+=210px'
				});
			}
		});
		$('#block-system-user-menu .content a').each(function() {
			if ($(this).hasClass('nolink')) {
				$(this).replaceWith($('<h3>' + this.innerHTML + '</h3>'));
			}
		});
	});
})(jQuery, Drupal, this, this.document);