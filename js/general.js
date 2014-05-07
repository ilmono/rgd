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

		setInterval(function(){
			var $active = $('#cycler .active');
			var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
			$next.css('z-index',2);
			$active.fadeOut(1500,function(){
				$active.css('z-index',1).show().removeClass('active');
				$next.css('z-index',3).addClass('active');
			});
		}, 4000);

		$('#btn-borrar').click(function(){
			$('.input-text').val('');
			$('#form-consulta').val('');
			return false;
		});
	});

})(jQuery);