
// Check element type and class (slideLeft vs. slideRight)
$(window).scroll(function() {
	$('h3').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+100) {
			$(this).addClass("slideLeft");
		}
	});
});


$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});