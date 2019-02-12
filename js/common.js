$(document).ready(function() {

		$('a[href^="#"]').click(function(event){
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;

			$('html').animate({scrollTop: destination}, 1000);

		return false;
	});

	var owl_top = $(".owl-carousel-top");

	owl_top.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,
		touchDrag: true,
		dots: true,
		rewind: true,
		loop: true
	});

	$('.prev-top').click(function(){
		owl_top.trigger('prev.owl.carousel');
	});

	$('.next-top').click(function(){
		owl_top.trigger('next.owl.carousel');
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});