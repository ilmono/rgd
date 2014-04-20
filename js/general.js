(function ($) {
	$(document).ready(function() {
		
		$('.acordion-text').hide();
		$('#nav > li > a').click(function(){
			if ($(this).attr('class') != 'active'){
				$('#nav li div').slideUp();
				$(this).next().slideToggle();
				$('#nav li a').removeClass('active');
				$(this).addClass('active');
			}
		});
		$('#acordion-item-1').click();

	    $('.fade').slick({
	        dots: true,
	        infinite: true,
	        speed: 500,
	        fade: true,
	        autoplay: true,
	        autoplaySpeed: 2000,
	        slide: 'div',
	        cssEase: 'linear'
	    });

	});
})(jQuery);