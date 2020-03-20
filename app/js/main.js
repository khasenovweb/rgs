$(document).ready(function(){
	ymaps.ready(init);
	var myMapAll;
	    function init() {
	        myMapAll = new ymaps.Map("contacts__map", {
	            center: [55.876314, 37.566844],
	            zoom: 17
	        });

	        var myPlacemark_azs_1 = new ymaps.Placemark([55.876314, 37.566844], {
                    hintContent: 'Русградстрой',
                    balloonContentHeader: 'Русградстрой',
                    balloonContentBody: '<p></p>'
                }
            );
             myMapAll.geoObjects.add(myPlacemark_azs_1);
	    }

	 $("[ data-click='scroll']").mPageScroll2id({
	 	scrollSpeed: 300,
	 });

	 $(window).scroll(function(){
	 	if($(window).scrollTop() > 200) {
	 		$('.upbtn').addClass('active');
	 	}else {
	 		$('.upbtn').removeClass('active');
	 	}
	 });

	 $('.catalog__head__item').each(function(i, el){
	 	var def = $(el).children('.catalog__head__item__icon').attr('data-icon-default');
	 	$(el).children('.catalog__head__item__icon').css('background-image', 'url('+def+')');
	 });

	 $('.catalog__head__item').hover(function(){
	 	var active = $(this).children('.catalog__head__item__icon').attr('data-icon-active');
	 	$(this).children('.catalog__head__item__icon').css('background-image', 'url('+active+')');
	 },function(){
	 	var def = $(this).children('.catalog__head__item__icon').attr('data-icon-default');
		$(this).children('.catalog__head__item__icon').css('background-image', 'url('+def+')');
	 });


	 $('[data-click="catalog-open"]').click(function(){
	 	event.preventDefault();
	 	$('[data-modal="catalog"]').show();
	 	$('body').addClass('hidden');
	 });
	 $('[data-click="catalog-close"]').click(function(){
		$('[data-modal="catalog"]').hide();
		$('body').removeClass('hidden');
	 });
});
