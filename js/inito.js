
(function($, fnFrontend){
	"use strict";
	
	
	
	var Frel = {
		
		init: function() {

			var widgets = {
				'frel-hero-header.default' : Frel.frel_all_functions,
				'frel-info-list.default' : Frel.frel_all_functions,
				'frel-about.default' : Frel.parallaxMaster,
				'frel-info-rating.default' : Frel.infoRatingCarousel,
				'frel-services.default' : Frel.serviceShortcode,
				'frel-experience.default' : Frel.experienceShortcode,
				'frel-project-sticky.default' : Frel.projectStickyShortcode,
				'frel-support-block.default' : Frel.supportBlockShortcode,
				'frel-triple-blog.default' : Frel.tripleBlogShortcode,
				'frel-check-list.default' : Frel.ImgToSVG,
				'frel-accordion.default' : Frel.accordionFunction,
				'frel-location-list.default' : Frel.locationListFunction,
				'frel-main-slider-with-content.default' : Frel.mainSliderWithContnetFunction,
				'frel-introduce.default' : Frel.introduceFunction,
				'frel-principles.default' : Frel.principlesFunction,
				'frel-counter-with-content.default' : Frel.counterWithContentFunction,
				'frel-counter-with-rating.default' : Frel.counterWithContentFunction,
				'frel-project-sticky-modern.default' : Frel.projectStickyShortcode,
				'frel-services-classic.default' : Frel.ImgToSVG,
				'frel-triple-blog-modern.default' : Frel.tripleBlogShortcode,
				'frel-hero-header-modern.default' : Frel.frel_all_functions,
				'frel-principles-modern.default' : Frel.frel_all_functions,
				'frel-service-query.default' : Frel.serviceQueryFunction,
				'frel-full-custom-list.default' : Frel.serviceQueryFunction,
				'frel-about-with-rating.default' : Frel.frel_all_functions,
				'frel-single-testimonial.default' : Frel.frel_all_functions,
				'frel-project-sticky-full.default' : Frel.projectStickyShortcode,
				'frel-kenburnsy.default' : Frel.kenburnsyShortcode,
				'frel-arrow-link.default' : Frel.ImgToSVG,
				'frel-alpha-slider.default' : Frel.alphaSliderFunction,
				'frel-portfolio-details.default' : Frel.frel_all_functions,
				'frel-hero-header-all-in-one.default' : Frel.heroHeaderAllInOne,
				'frel-about-text-slider.default' : Frel.aboutTextSlider,
				'frel-about-text-slider-classic.default' : Frel.aboutTextSlider,
				'frel-progress-bar.default' : Frel.progress,
				'frel-progress-bar-with-desc.default' : Frel.progress,
				'frel-project-category-filter.default' : Frel.projectCategoryFilter,
				'frel-why-choose-us.default' : Frel.whyChooseUs,
				'frel-team-member.default' : Frel.whyChooseUs,
				'frel-single-testimonial-parallax.default' : Frel.singleTestimonialParallax,
				'frel-partners.default' : Frel.partners,
				'frel-useful-information.default' : Frel.ImgToSVG,
				'frel-portfolio-images.default' : Frel.BgImg,
				'frel-triple-blog-shadow.default' : Frel.BgImg,
				'frel-counter-with-description.default' : Frel.counterWithContentFunction,
				'frel-triple-blog-shadow-a.default' : Frel.BgImg,
				'frel-hero-header-elegant.default' : Frel.heroHeaderAllInOne,
			};

			$.each( widgets, function( widget, callback ) {
				fnFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			});
		},
		
		frel_all_functions: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.lightGallery();
		},
		partners: function(){
			var carousel = $('.fn_cs_partners .owl-carousel');
			carousel.each(function(){
				$(this).owlCarousel({
					loop: true,
					items: 4,
					lazyLoad: true,
					margin: 40,
					autoplay: true,
					autoplayTimeout: 4000,
					smartSpeed: 2000,
					dots: false,
					nav: false,
					navSpeed: true,
					responsive:{
						0:{items:1},
						480:{items:2},
						768:{items:3},
						1040:{items:3},
						1200:{items:4},
					}
				});	
			});
			
		},
		singleTestimonialParallax: function(){
			Frel.jarallaxEffect();
			Frel.BgImg();
			Frel.ImgToSVG();
		},
		whyChooseUs: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		menuOpenerForChildTheme: function(){
			var switcherOpener				= jQuery('.arlo_fn_header .header_closer');
			switcherOpener.on('click',function(){
				setTimeout(function(){
					Frel.projectCategoryFitler();
				},300);
			});
		},
		projectCategoryFilter: function(){
			Frel.projectCategoryFitler();
			Frel.menuOpenerForChildTheme();
		},
		projectCategoryFitler: function(){
			if($().isotope){
				var items 			= $('.fn_cs_project_category');
				items.each(function(){
					var thisItem 	= $(this);
					var list 		= thisItem.find('.posts_list');
					var filter 		= thisItem.find('.posts_filter');


					// Isotope Filter 
					filter.find('a').off().on('click', function(){
						var selector 	= $(this).attr('data-filter');
						list 			= thisItem.find('.posts_list');
						filter.find('a').removeClass('current');
						$(this).addClass('current');
						list.isotope({ 
							filter				: selector,
							animationOptions	: {
								duration			: 750,
								easing				: 'linear',
								queue				: false
							}
						});
						return false;
					});
				});
			}
			Frel.BgImg();
			$('.fn_cs_project_category ul.posts_list li .item').on('mouseenter', function() {
				var thisItem	= $(this);
				var movingDiv	= thisItem.closest('.fn_cs_project_category').find('.fn_cs_project_moving_title');
				var title		= thisItem.data('title');
				var category	= thisItem.data('category');
				if(title) {
					movingDiv.html('<h3>'+ title + '</h3><span>' + category + '</span>');
					movingDiv.addClass('visible');
				}

				$(document).on('mousemove', function(e) {
					movingDiv.css({
						left: e.clientX - 10,
						top: e.clientY + 25
					});
				});
			}).on('mouseleave', function() {
				$(this).closest('.fn_cs_project_category').find('.fn_cs_project_moving_title').removeClass('visible');
			});
		},
		progress: function(){
			$('.fn_cs_progress_wrap').each(function() {
				var pWrap 	= $(this);
				pWrap.waypoint({handler: function(){Frel.progressF(pWrap);},offset:'90%'});
			});	
		},
		
		progressF: function(container){
			container.find('.fn_cs_progress').each(function(i) {
				var progress 	= $(this);
				var pValue 		= parseInt(progress.data('value'));
				var pBarWrap 	= progress.find('.fn_cs_bar_wrap');
				var pBar 		= progress.find('.fn_cs_bar');
				pBar.css({width:pValue+'%'});
				setTimeout(function(){pBarWrap.addClass('open');},(i*500));
			});	
		},
		aboutTextSlider: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			if($('.parallax').length > 0) { 
//			  var scene = $('.parallax').get(0);
			  	var scene = $('.parallax');
				scene.parallax();
			}
			var animateSpan			= $('span.arlo_fn_animation_text');
			animateSpan.each(function(){
				var span		= $(this);
				var items		= span.data('items');
				if(items !== ''){
					items		= items.split(':::');
					span.typed({
						strings: items,
						loop: true,
						startDelay: 1e3,
						backDelay: 2e3
					});	
				}
			});
		},
		heroHeaderAllInOne: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
			var animateSpan			= $('span.arlo_fn_animation_text');
			animateSpan.each(function(){
				var span		= $(this);
				var items		= span.data('items');
				if(items !== ''){
					items		= items.split(':::');
					span.typed({
						strings: items,
						loop: true,
						startDelay: 1e3,
						backDelay: 2e3
					});	
				}
			});
			
			$('.cons_w_wrapper .fn_cs_hero_header_exclusive > a').off().on('click',function(){
				if($.attr(this, 'href') !== '#'){
					$('html, body').animate({
						scrollTop: $($.attr(this, 'href')).offset().top
					}, 1000);
				}
				return false;
			});
			Frel.jarallaxEffect();
			Frel.kenburnsyShortcode();
			if($(".cons_w_wrapper .fn_glitch").length){
				$(".cons_w_wrapper .fn_glitch").mgGlitch({
					destroy: false,
					glitch: true,
					scale: true,
					blend: true,
					blendModeType: "hue",
					glitch1TimeMin: 200,
					glitch1TimeMax: 400,
					glitch2TimeMin: 10,
					glitch2TimeMax: 100
				});
			}
			if($(".cons_w_wrapper .fn_ripple").length){
				$(".cons_w_wrapper .fn_ripple").ripples({
					resolution: 500,
					perturbance: 0.04
				});
			}
		},
		jarallaxEffect: function(){
			$('.jarallax').each(function(){
				var element			= $(this);
				var	customSpeed		= element.data('speed');

				if(customSpeed !== "undefined" && customSpeed !== ""){
					customSpeed = customSpeed;
				}else{
					customSpeed 	= 0.5;
				}
				element.jarallax({
					speed: customSpeed,
					automaticResize: true
				});
			});
		},
		alphaSliderFunction: function(){
			Frel.BgImg();
			$('.arlo_slider_alpha').each(function(){
				var images 			= $(this);
				var autoplaySwitch 	= images.data('autoplay-switch');
				var effect		 	= images.data('effect');
				var autoplayTime;
				if(autoplaySwitch === 'enabled'){
					autoplayTime = images.data('autoplay-time');
				}else{
					autoplayTime = 80000;
				}
				var imagesSlider 	= new Swiper(images, {
					centeredSlides: false,
					slideToClickedSlide: false,
					slidesPerView: 1,
					spaceBetween: 0,
					preloadImages: false,
					lazyLoading: false,
					autoplay: {
						delay: autoplayTime,
						disableOnInteraction: false
					},
					initialSlide:0,
					navigation: {
						nextEl: images.find('.fn_next'),
						prevEl: images.find('.fn_prev'),
					  },
					effect: effect,
					coverflowEffect: {
						rotate: 30,
						slideShadows: false,
					},
					flipEffect: {
						rotate: 30,
						slideShadows: false,
					},
					cubeEffect: {
						slideShadows: false,
					},
					loop: true,
					pagination: {
						el: images.find('.swiper-pagination'),
						type: 'progressbar',
					},
					speed: 1000
				});
			});	
		},
		
		
		ImgToSVG: function(){
			
			jQuery('img.arlo_w_fn_svg').each(function(){
				var $img 		= jQuery(this);
				var imgClass	= $img.attr('class');
				var imgURL		= $img.attr('src');

				jQuery.get(imgURL, function(data) {
					var $svg = jQuery(data).find('svg');
					if(typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass+' replaced-svg');
					}
					$img.replaceWith($svg);

				}, 'xml');

			});
		},
		
		BgImg: function(){
			
			var div = $('*[data-bg-img]');
			div.each(function(){
				var element = $(this);
				var attrBg	= element.attr('data-bg-img');
				var dataBg	= element.data('bg-img');
				if(typeof(attrBg) !== 'undefined'){
					element.css({backgroundImage:'url('+dataBg+')'});
				}
			});
		},
		lightGallery: function(){
			if(jQuery().lightGallery){
				// FIRST WE SHOULD DESTROY LIGHTBOX FOR NEW SET OF IMAGES

				var gallery = jQuery('.fn_cs_lightgallery');

				gallery.each(function(){
					var element = jQuery(this);
					element.lightGallery(); // binding
					if(element.length){element.data('lightGallery').destroy(true); }// destroying
					jQuery(this).lightGallery({
						selector: ".lightbox",
						thumbnail: 1,
						loadYoutubeThumbnail: !1,
						loadVimeoThumbnail: !1,
						showThumbByDefault: !1,
						mode: "lg-fade",
						download:!1,
						getCaptionFromTitleOrAlt:!1,
					});
				});
			}	
		},
		parallaxMaster: function(){
			var scene = jQuery('#scene');
			scene.parallax();
			Frel.BgImg();
		},
		infoRatingCarousel: function(){
			var owl 		= $('.fn_cs_info_rating .owl-carousel');
			var rtlReady 	= false;
			if($('body').hasClass('rtl')){
				rtlReady 	= true;
			}
			owl.each(function(){
				var el 		= $(this);
				el.owlCarousel({
					loop:false,
					margin:10,
					nav:true,
				 	autoWidth:true,
				 	rtl:rtlReady,
					dots: false
				});
			});
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.lightGallery();
			Frel.infoRatingCalc();
		},
		infoRatingCalc: function(){
			var rating = jQuery('.fn_cs_info_rating');
			rating.each(function(){
				var el 				= jQuery(this);
				var tagline			= el.find('.tagline_holder');
				var spanHeight	 	= el.find('.tagline_holder span').outerWidth() + 15;
				tagline.css({height: spanHeight + 'px'});
			});
			
		},
		miniBoxesForShortcodes: function(){

			var el 		= jQuery('.fn_cs_miniboxes');

			if(el.length){
				el.each(function(index, element) {
					var child	= jQuery(element).find('.fn_cs_minibox');
					child.css({height:'auto'});
					var W 		= jQuery(window).width();
					if(W > 460){
						var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
						var maxHeight 		= Math.max.apply(null, elementHeights);
						child.css({height:maxHeight+'px'}); 
					}
				});  
			}

		},
		miniSBoxesForShortcodes: function(){

			var el 		= jQuery('.fn_cs_sminiboxes');

			if(el.length){
				el.each(function(index, element) {
					var child	= jQuery(element).find('.fn_cs_sminibox');
					child.css({height:'auto'});
					var W 		= jQuery(window).width();
					if(W > 1200){
						var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
						var maxHeight 		= Math.max.apply(null, elementHeights);
						child.css({height:maxHeight+'px'}); 
					}
				});  
			}

		},
		serviceShortcode: function(){
			Frel.ImgToSVG();
			Frel.miniBoxesForShortcodes();
		},
		experienceShortcode: function(){
			Frel.BgImg();
		},
		projectStickyShortcode: function(){
			Frel.miniSBoxesForShortcodes();
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		supportBlockShortcode: function(){
			Frel.ImgToSVG();
			Frel.supportBlockBgCalc();
		},
		supportBlockBgCalc: function(){
			var sBlock = jQuery('.fn_cs_support_block .support_block');
			sBlock.each(function(){
				var el = jQuery(this);
				var height = el.outerHeight() - 30;
				el.find('.img_wrap span').css({borderTopWidth: height + 'px'});
			});
		},
		tripleBlogShortcode: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		accordionFunction: function(){
			if($().fn_cs_accordion){
				var acc = $('.fn_cs_accordion');
				acc.each(function(){
					$(this).fn_cs_accordion({
						showIcon: false, //boolean	
						animation: true, //boolean
						closeAble: true, //boolean
						slideSpeed: 500 //integer, miliseconds
					});
				});
			}
			Frel.ImgToSVG();
		},
		locationListFunction: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		mainSliderWithContnetFunction: function(){
			jQuery('.fn_cs_main_slider_with_content').each(function(){
				var images			= jQuery(this).find('.inner');
				var autoDelay		= jQuery(this).data('autoplay-delay');
				var imagesSlider 	= new Swiper(images, {
					centeredSlides: false,
					slideToClickedSlide: false,
					slidesPerView: 1,
					spaceBetween: 0,
					navigation: {
						nextEl: images.find('.fn_next'),
						prevEl: images.find('.fn_prev'),
					 },
					effect: 'slide',
					loop: true,
					fadeEffect: {
						crossFade: true
					  },
					pagination: {
						el: images.find('.swiper_pagination'),
						type: 'custom',
						renderCustom: function (swiper, current, total) {
							if(current<10){current = '0' + current;}
							if(total<10){total = '0' + total;}
						  return '<span><span class="current">' + current + '</span> / <span class="total">' + total + '</span></span>';
						},
				  	},
					autoplay: {
						delay: autoDelay,
						disableOnInteraction: false,
					},
				});
			});
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		introduceFunction: function(){
			Frel.lightGallery();
			Frel.introduceCalcFunction();
		},
		introduceCalcFunction: function(){
			jQuery('.fn_cs_introduce_wrap').each(function(){
				var el 		= jQuery(this);
				var introW	= el.find('.fn_cs_introduce').outerWidth();
				var wings	= el.find('span.wing12, span.wing22');
				if(wings.length){
					wings.css({borderRightWidth:( Math.floor((introW * 0.7)) - 40) + 'px'});
				}				
			});
		},
		isotopeFunction: function(){
			var masonry = jQuery('.fn_cs_masonry');
			if(jQuery().isotope){
				masonry.each(function(){
					jQuery(this).isotope({
					  itemSelector: '.fn_cs_masonry_in',
					  masonry: {

					  }
					});
				});
			}
		},
		principlesFunction: function(){
			Frel.isotopeFunction();
		},
		counterWithContentFunction: function(){
			var element = jQuery('.fn_cs_counter');
			element.each(function() {
				var el = jQuery(this);
				el.waypoint({
					handler: function(){
						if(!el.hasClass('stop')){
							el.addClass('stop').countTo({
								refreshInterval: 50,
								formatter: function (value, options) {
									return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
								},	
							});
						}
					},
					offset:'90%'	
				});
			});	
			Frel.BgImg();
			Frel.lightGallery();
			Frel.ImgToSVG();
		},
		principlesModernFunction: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.miniBoxesForShortcodes();
			Frel.principleModernShapeCalc();
		},
		principleModernShapeCalc: function(){
			var inner = $('.fn_cs_principles_modern .inner');
			inner.each(function(){
				var el = $(this);
				var shape = el.find('.shape2');
				shape.css({borderLeftWidth:Math.floor(el.outerWidth()-30) + 'px'});
			});
		},
		serviceQueryFunction: function(){
			var owl			 	= jQuery('.fn_cs_service_query .owl-carousel');
			var rtlReady 		= false;
			if($('body').hasClass('rtl')){
				rtlReady		= true;
			}
			owl.each(function(){
				var el 			= jQuery(this);
				var columnCount = el.closest('.fn_cs_service_query').data('column-count');
				var count 		= 4;
				if($.isNumeric(columnCount)){count = columnCount;}
				var count14,count12,count48;
				switch(count){
					case 5: count14 = 5; count12 = 4; count48 = 2; break;
					case 4: count14 = 4; count12 = 3; count48 = 2; break;
					case 3: count14 = 3; count12 = 3; count48 = 2; break;
					case 2: count14 = 2; count12 = 2; count48 = 2; break;
					case 1: count14 = 1; count12 = 1; count48 = 1; break;
				}
				el.owlCarousel({
					loop:true,
					margin:0,
					nav:false,
				 	items:4,
				 	rtl:rtlReady,
					dots: false,
					responsive : {
						0 : {items : 1},
						480 : {items : count48},
						1200 : {items : count12},
						1400 : {items : count14}
					}
				});
				var prev = el.parent().parent().find('.owl_control .fn_prev');
				var next = el.parent().parent().find('.owl_control .fn_next');
				prev.on('click',function(){
					el.trigger('prev.owl');
					return false;
				});
				next.on('click',function(){
					el.trigger('next.owl');
					return false;
				});
				Frel.ImgToSVG();
			});
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		kenburnsyShortcode: function(){
			var kenburns = jQuery('.fn_cs_kenburnsy');
			kenburns.each(function(){
				var element = jQuery(this);
				var duration = element.data('interval');
				element.kenburnsy({
					fullscreen: true,
					duration: duration,
				});
			});
		}
	};
	
	$( window ).on( 'elementor/frontend/init', Frel.init );
	
	
	$( window ).on( 'elementor/frontend/init', Frel.miniBoxesForShortcodes );
	$( window ).on('resize',function(){
		Frel.miniBoxesForShortcodes();
		Frel.miniSBoxesForShortcodes();
		Frel.supportBlockBgCalc();
		Frel.introduceCalcFunction();
		Frel.isotopeFunction();
		Frel.principleModernShapeCalc();
		setTimeout(function(){
			Frel.miniBoxesForShortcodes();
			Frel.miniSBoxesForShortcodes();
			Frel.supportBlockBgCalc();
			Frel.introduceCalcFunction();
			Frel.isotopeFunction();
			Frel.principleModernShapeCalc();
		},700);
	});
	$( window ).on('load',function(){
		Frel.miniBoxesForShortcodes();
		Frel.miniSBoxesForShortcodes();
		Frel.supportBlockBgCalc();
		Frel.introduceCalcFunction();
		Frel.isotopeFunction();
		Frel.principleModernShapeCalc();
	});
	
})(jQuery, window.elementorFrontend);