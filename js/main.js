$(document).ready(function(){
	const slider = new Swiper(".offers__slider", {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		centeredSlides: true,
		spaceBetween: 75,
		touchRatio: 1,
		navigation: {
   			nextEl: '.offers__slider-arrow-next',
    		prevEl: '.offers__slider-arrow-prev',
 		},
 		pagination: {
 			el: '.offers__slider-pagination',
 			clickable: true,
 		},
 		breakpoints: {
 			960: {
 				slidesPerGroup: 3,
 				touchRatio: 0,
 			},
 		},
	});
	$(".blog__item").on("click", function(){
		$(".blog__item").removeClass("active").eq($(this).index()).addClass("active");
		$(".blog__main-item").removeClass("active").eq($(this).index()).addClass("active")
	});
	$(".menu__btn").on("click", function(){
		$(".mobile__menu").addClass("active");
	});
	$(".menu__close-btn").on("click", function(){
		$(".mobile__menu").removeClass("active");
	});
});