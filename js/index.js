$(document).ready(function() {
    $('body').fadeOut(100).fadeIn(1500);
/*gotop*/
	$('#BackTop').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 200 ){
			$('#BackTop').fadeIn(222);
		} else {
			$('#BackTop').stop().fadeOut(222);
		}
       
         $('.fade').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        })
	}).scroll(); 
});


