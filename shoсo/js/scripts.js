$(document).ready(function(){
	
	$("#phone").mask("8 (999) 999 99 99");
	$("#phone2").mask("8 (999) 999 99 99");
	$("#phone3").mask("8 (999) 999 99 99");





	$('.utpBt').click(function(e){
		e.preventDefault();
		console.log('utpBt click');
	});


	$('#slider').owlCarousel({
		// autoWidth:true,
		// merge:true,
		items: 1,
		center: true,
    loop:true,
    margin: 0,
		nav:true,
		responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
		}
	
  });



// вкладки левого меню
$('.toggle').click(function(e) {
	e.preventDefault();

	var $this = $(this);

	if ($this.next().hasClass('show')) {
			$this.next().removeClass('show');
			$this.next().slideUp(350);
			
	} else {
			$this.parent().parent().find('li .inner').removeClass('show');
			$this.parent().parent().find('li .inner').slideUp(350);
			$this.next().toggleClass('show');
			$this.next().slideToggle(350);

	}
});


// модалка карточки товара на главной
	$('.orderCard').click(function(e){
		e.preventDefault();

		$('.overlay').addClass('overlay_active');

		setTimeout(function(){
			$('.orderTovarCatalog').addClass('orderTovarCatalog_active');
		},50);

	});

	$('.closeBt').click(function(e){
		e.preventDefault();

		$('.orderTovarCatalog').removeClass('orderTovarCatalog_active');

		setTimeout(function(){
			$('.overlay').removeClass('overlay_active');
		},150);

	});




	// листалка Наши клиенты на главной

	$("#clients").owlCarousel({
    loop: true,
		// autoHeight: true,
		// stagePadding: 5,
		autoWidth:true,
		// center:true,
    margin: 22,
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 700,
    items: 1,
    dots:true,
    nav: true,
    navText: ['<img src="./img/arrow_left.svg">','<img src="./img/arrow_right.svg">'],
    responsiveClass: true,
    responsive:{
        0: {
          items: 1,
          nav:false,
        },

        800:{
          items: 2,
          nav:false
        },

        1100:{
          items: 4
        }
      }
			});
			

			


	// листалка Наши партнеры на главной

	$("#partners").owlCarousel({
    loop: true,
		// autoHeight: true,
		// stagePadding: 5,
		// autoWidth:true,
		// center:true,
    // margin: 22,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 700,
    items: 6,
    dots:false,
    nav: false,
    navText: ['<img src="./img/arrow_left.svg">','<img src="./img/arrow_right.svg">'],
    responsiveClass: true,
    responsive:{
        0: {
          items: 1,
          nav:false,
        },

        800:{
          items: 2,
          nav:false
        },

        1100:{
          items: 6
        }
      }
      });


	



	// вызов модалки Политики
	
	$('.politics').click(function(e){
		e.preventDefault();


	});




	// выбор города в блоке свяжитесь с нами
$('.toggle2').click(function(e) {
	e.preventDefault();

	var $this = $(this);

	if ($this.next().hasClass('show')) {
			$this.next().removeClass('show');
			$this.next().slideUp(350);
			
	} else {
			$this.parent().parent().find('li .inner').removeClass('show');
			$this.parent().parent().find('li .inner').slideUp(350);
			$this.next().toggleClass('show');
			$this.next().slideToggle(350);

	}
});



	// табы главного фильтра
	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
				var tab = $(this).closest('.tab'), 
						index = $(this).closest('li').index();
				
				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');
				
				tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
				tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
				
				g.preventDefault();
		} );
})(jQuery);

});