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
	}).scroll(); 
    
    /*$(window).scroll(function() {
		if ( $(this).scrollTop() > 350 ){
			$('nav').fadeIn(222);
		} else {
			$('nav').stop().fadeOut(222);
            $('nav').css({
              'background':'#EFEFF0',
            })
		}
	}).scroll();*/
    
});


