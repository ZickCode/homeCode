$(function(){
	$('.switch-box a').hover(function(){
		if($(this).index() == 0){
			$('.head').removeClass('active');
		}else{
			$('.head').addClass('active');
		}
	},function(){
		
	});

	var sw = new Swiper('.J-match-news-banner',{
		prevButton:'.button-prev',
		nextButton:'.button-next'
	});
});