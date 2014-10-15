$(window).scroll(function() {
	$('h3').each(function(){
	var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+100) {
				$(this).addClass("fadeInLeft");
			}
		});

 	});
});





// waypoints.js plug-in set triggers -- 