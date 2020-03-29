/*
 * Copyright (c) 2019 Frenify
 * Author: Frenify
 * This file is made for CURRENT THEME
*/


/*

	@Author: Frenify
	@URL: http://themeforest.net/user/frenify


	This file contains the jquery functions for the actual theme, this
	is the file you need to edit to change the structure of the
	theme.

	This files contents are outlined below.
	
	01. LANGUAGE OPENER
	02. IMAGE TO SVG
	03. ALL DATA BACKGROUND IMAGE
	04. HAMBURGER
	05. VERTICAL SUBMENU
	06. TOTOP
	07. SLIDER POST
	08. GALLERY LIGHTBOX
	09. ESTIMATE WIDGET
	10. AJAX (HARD WORK)
	11. JUSTIFIED IMAGES
	12. STICKY SIDEBAR
	13. ALL PAGES MIN HEIGHT
	14. MASONSRY
	15. POSTS' SHAPES
	16. TOLL FREE CALC

*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	arlo_fn_checkSidebar();
	arlo_fn_langOpener();
	arlo_fn_imgToSvg();
	arlo_fn_dataBgImg();
	arlo_fn_movingLangCalc();
	arlo_fn_hambClick();
	arlo_fn_versubmenu();
	arlo_fn_totop();
	arlo_fn_postSlider();
	arlo_fn_lightbox();
	arlo_fn_estimateWidget();
	arlo_fn_ajaxPagination();
	arlo_fn_projectFilter();
	arlo_fn_justified_images();
	frenify_fn_sticky_sidebar();
	arlo_fn_allpages_height();
	arlo_fn_isotope();
	arlo_fn_postShapes();
	arlo_fn_tollFreeCalc();
	arlo_fn_allSelect2();
	arlo_fn_sticky_nav();
	arlo_fn_stickyNavInitialHide();
	arlo_fn_tagline_focus();
	arlo_fn_fixedsub();
	arlo_fn_fixedsubReCalc();
	arlo_fn_menubarScroll();
	arlo_fn_menuCloser();
	
	// here all resize functions
	jQuery(window).on('resize',function(e){
		e.preventDefault();
		arlo_fn_menubarScroll();
		arlo_fn_fixedsubReCalc();
		arlo_fn_movingLangCalc();
		arlo_fn_estimateWidget();
		arlo_fn_allpages_height();
		arlo_fn_isotope();
		arlo_fn_postShapes();
		arlo_fn_tollFreeCalc();
		arlo_fn_stickyNavInitialHide();
	});
	
	
	
	// here all load functions
	jQuery(window).on('load', function(e) {
		e.preventDefault();
		arlo_fn_isotope();
		arlo_fn_stickyNavInitialHide();
		setTimeout(function(){
			arlo_fn_isotope();
		},100);
	});
	
	
	jQuery(window).load('body', function(){
		if(jQuery('.arlo_fn_preloader').length){
			setTimeout(function(){
				jQuery('.arlo_fn_wrapper_all').addClass('preloader_loaded');
			}, 1000);
		}
	});
	
	
	// here all scroll functions
	jQuery(window).on('scroll', function(e) {
		e.preventDefault();
		arlo_fn_totopScroll();
    });
	
	// here all set time out funcstions
	setTimeout(function(){
		arlo_fn_isotope();
	},4500);
});
function arlo_fn_checkSidebar(){
	"use strict";
	var sidebar 		= jQuery('.arlo_fn_sidebar_in .forheight');
	if(sidebar.length){
		if(sidebar.height() === 0){
			jQuery('.arlo_fn_sidebarpage .s_inner').addClass('no_height');
			jQuery('.arlo_fn_sidebarpage .inner').addClass('no_height');
		}
	}
}
// -----------------------------------------------------
// ------------    01. LANGUAGE OPENER    --------------
// -----------------------------------------------------
function arlo_fn_langOpener(){
	"use strict";
	var lang 		= jQuery('.arlo_fn_custom_lang_switcher');
	if(lang.length){
		var click 		= lang.find('span.click');
		var box 		= lang.find('ul');
		var location	= window.location.href;
		var myLocation	= '^http://arlo.frenify.com/1/';
		var langTO		= lang.offset().top;
		var langLO		= lang.offset().left;
		var wrapper		= jQuery('.arlo_fn_wrapper_all');
		var newAttr 	= '';
		var customAttr 	= '';
		if(lang.hasClass('frenify_url')){
			newAttr	= 'frenify_url';
		}
		var extraH = 0;
		if(jQuery('body').hasClass('admin-bar')){
			extraH	= 32;
		}
		if(jQuery('.arlo_fn_custom_lang_switcher').hasClass('custom_language')){
			customAttr = 'custom_language';
		}
		wrapper.append('<div class="arlo_fn_moving_lang ' + newAttr + ' ' + customAttr + '"><ul>'+box.html() + '</ul></div>');
		var movingLang 	= jQuery('.arlo_fn_moving_lang');
		var box2		= movingLang.find('ul');
		movingLang.css({position:'absolute',left:langLO + 'px',top:langTO - extraH + 30 + 'px'});

		if(lang.length){
			click.on('click',function(){
				if(lang.hasClass('opened')){
					movingLang.removeClass('opened');
					lang.removeClass('opened');
				}else{
					lang.addClass('opened');
					movingLang.addClass('opened');
				}
			});
			if(location.match(myLocation)){
				box2.find('li').on('click',function(){
					var element			= jQuery(this);
					var spanHTML 		= element.find('span').html();
					var oldChildHTML 	= box2.find('li.active').html();
					if(element.hasClass('active')){
						// do nothing
					}else{
						box2.find('li.active').removeClass('active').html('<a href="#">' + oldChildHTML + '</a>');
						element.addClass('active').html('<span>' + spanHTML + '</span>');
						lang.removeClass('opened');
						click.html(spanHTML);
					}

					return false;
				});
			}
			jQuery(window).on('click',function() {
				lang.removeClass('opened');
				movingLang.removeClass('opened');
			});
			box2.on('click',function(event){
				event.stopPropagation();
			});
			lang.on('click',function(event){
				event.stopPropagation();
			});
		}
	}
	
}
function arlo_fn_movingLangCalc(){
	"use strict";
	var movingLang 	= jQuery('.arlo_fn_moving_lang');
	
	if(movingLang.length){
		var lang 		= jQuery('.arlo_fn_custom_lang_switcher');
		var langTO		= lang.offset().top;
		var langLO		= lang.offset().left;
		var extraH = 0;
		if(jQuery('body').hasClass('admin-bar')){
			extraH	= 32;
		}
		movingLang.css({position:'absolute',left:langLO + 'px',top:langTO - extraH + 30 + 'px'});
	}
}
// -----------------------------------------------------
// -------------    02. IMAGE TO SVG    ----------------
// -----------------------------------------------------
function arlo_fn_imgToSvg(){
	"use strict";
	
	jQuery('img.arlo_fn_svg').each(function(){
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
}
// -----------------------------------------------------
// --------    03. ALL DATA BACKGROUND IMAGE    --------
// -----------------------------------------------------
function arlo_fn_dataBgImg(){
	"use strict";
	var bgImage = jQuery('*[data-fn-bg-img]');
	bgImage.each(function(){
		var element = jQuery(this);
		var attrBg	= element.attr('data-fn-bg-img');
		var bgImg	= element.data('fn-bg-img');
		if(typeof(attrBg) !== 'undefined'){
			element.css({backgroundImage:'url('+bgImg+')'});
		}
	});
}

// -----------------------------------------------------
// ---------------    04. HAMBURGER    -----------------
// -----------------------------------------------------
function arlo_fn_hambClick(){
	"use strict";
	
	var hamburger		= jQuery('.arlo_fn_mobilemenu_wrap .hamburger');
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		var menupart	= jQuery('.arlo_fn_mobilemenu_wrap .mobilemenu');
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			menupart.removeClass('opened');
			menupart.slideUp(500);
		}else{
			element.addClass('is-active');
			menupart.addClass('opened');
			menupart.slideDown(500);
		}return false;
	});
}
// -----------------------------------------------------
// ------------    05. VERTICAL SUBMENU    -------------
// -----------------------------------------------------
function arlo_fn_versubmenu(){
	"use strict";
	
	var nav 						= jQuery('ul.vert_menu_list, .widget_nav_menu ul.menu');
	var mobileAutoCollapse			= jQuery('.arlo_fn_wrapper_all').data('mobile-autocollapse');
	nav.each(function(){
		jQuery(this).find('a').on('click', function(e){
			var element 			= jQuery(this);
			var parentItem			= element.parent('li');
			var parentItems			= element.parents('li');
			var parentUls			= parentItem.parents('ul.sub-menu');
			var subMenu				= element.next();
			var allSubMenusParents 	= nav.find('li');

			allSubMenusParents.removeClass('opened');

			if(subMenu.length){
				e.preventDefault();

				if(!(subMenu.parent('li').hasClass('active'))){
					if(!(parentItems.hasClass('opened'))){parentItems.addClass('opened');}

					allSubMenusParents.each(function(){
						var el = jQuery(this);
						if(!el.hasClass('opened')){el.find('ul.sub-menu').slideUp();}
					});

					allSubMenusParents.removeClass('active');
					parentUls.parent('li').addClass('active');
					subMenu.parent('li').addClass('active');
					subMenu.slideDown();


				}else{
					subMenu.parent('li').removeClass('active');
					subMenu.slideUp();
				}
				return false;
			}
			if(mobileAutoCollapse === 'enable'){
				if(nav.parent().parent().hasClass('opened')){
					nav.parent().parent().removeClass('opened').slideUp();
					jQuery('.arlo_fn_mobilemenu_wrap .hamburger').removeClass('is-active');
				}
			}
		});
	});
}
// -----------------------------------------------------
// ------------------    06. TOTOP    ------------------
// -----------------------------------------------------
function arlo_fn_totop(){
	"use strict";
	var totop		= jQuery('a.arlo_fn_totop');
	if(totop.length){
		totop.on('click', function(e) {
			e.preventDefault();		
			jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
			return false;
		});
	}
}
function arlo_fn_totopScroll(){
	"use strict";
	var totop		= jQuery('a.arlo_fn_totop');
	if(totop.length){
		var topOffSet 	= totop.offset().top;
		if(topOffSet > 1000){
			totop.addClass('scrolled');
		}else{
			totop.removeClass('scrolled');
		}
	}
}
// -----------------------------------------------------
// ---------------    07. SLIDER POST    ---------------
// -----------------------------------------------------
function arlo_fn_postSlider(){
	"use strict";
	var slider = jQuery('.arlo_fn_blog_single .fn-format-gallery .owl-carousel');
	if(jQuery().owlCarousel){
		slider.owlCarousel({
			loop:false,
			margin:10,
			nav:true,
			items: 1,
			dots: false
		});
	}
}
// -----------------------------------------------------
// -------------   08. GALLERY LIGHTBOX    -------------
// -----------------------------------------------------
function arlo_fn_lightbox(){
	"use strict";
	if(jQuery().lightGallery){
		// FIRST WE SHOULD DESTROY LIGHTBOX FOR NEW SET OF IMAGES
		
		var gallery = jQuery('.frenify_fn_lightbox');
		
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
	
}
// -----------------------------------------------------
// -------------   09. ESTIMATE WIDGET    --------------
// -----------------------------------------------------
function arlo_fn_estimateWidget(){
	"use strict";
	var est = jQuery('.arlo_fn_widget_estimate');
	est.each(function(){
		var el = jQuery(this);
		var h1 = el.find('.helper1');
		var h2 = el.find('.helper2');
		var h3 = el.find('.helper3');
		var h4 = el.find('.helper4');
		var h5 = el.find('.helper5');
		var h6 = el.find('.helper6');
		var eW = el.outerWidth();
		var w1 = Math.floor((eW * 80) / 300);
		var w2 = eW-w1;
		var e1 = Math.floor((w1 * 55) / 80);
		h1.css({borderLeftWidth:w1+'px',borderTopWidth:e1+'px'});
		h2.css({borderRightWidth:w2+'px',borderTopWidth:e1+'px'});
		h3.css({borderLeftWidth:w1+'px',borderTopWidth:w1+'px'});
		h4.css({borderRightWidth:w2+'px',borderTopWidth:w1+'px'});
		h5.css({borderLeftWidth:w1+'px',borderTopWidth:w1+'px'});
		h6.css({borderRightWidth:w2+'px',borderTopWidth:w1+'px'});
	});
}
// -----------------------------------------------------
// ------------    10. AJAX (HARD WORK)    -------------
// -----------------------------------------------------
var pageNumber = 1;

function arlo_fn_projectFilter(){
	"use strict";
	var filterB = jQuery('.arlo_fn_portfolio_category_filter');
	var mainBtn = jQuery('.arlo_fn_portfolio_category_filter > a');
	var filter	= jQuery('.portfolio_list ul.fn_filter');
	var btns 	= jQuery('.portfolio_list ul.fn_filter a');
	var spinner	= jQuery('.arlo_fn_portfolio_category_filter span.spinner');
	var listIn	= jQuery('.arlo_fn_portfolio_page .portfolio_list_in');
	
	if(jQuery().waitForImages){
		jQuery(window).load(function(){
			jQuery('.arlo_fn_portfolio_page .portfolio_list_in').waitForImages(function() {
				setTimeout(function(){
					listIn.css({height:jQuery('.arlo_fn_portfolio_page .portfolio_list_in').height()});
				},1500);
			});
		});
	}
	
	jQuery(window).on('click',function() {
		filter.removeClass('opened');
		filterB.removeClass('opened');
	});
	
	mainBtn.on('click',function(event){
		event.stopPropagation();
		if(filter.hasClass('opened')){
			filter.removeClass('opened');
			filterB.removeClass('opened');
		}else{
			filter.addClass('opened');
			filterB.addClass('opened');
		}
		return false;
	});
	btns.on('click',function(){
		var element = jQuery(this);
		var ID 		= element.data('filter-value');
		var name 	= element.data('filter-name');
		listIn.addClass('active');
		spinner.addClass('active');
		btns.removeClass('active');
		element.addClass('active');
		doAjaxCall(ID, 1);
		mainBtn.html(name);
		filter.removeClass('opened');
		filterB.removeClass('opened');
		pageNumber = 1;
		return false;
	});
	mainBtn.html(jQuery('.portfolio_list ul.fn_filter a.active').html());
}

function arlo_fn_ajaxPagination(){
	"use strict";
	
	jQuery('.arlo_fn_ajax_pagination ul.ajax_pagination li a.next').on('click', function(){
		if(jQuery(this).hasClass('inactive')) {return false;}
		pageNumber++;
		var currentCat = jQuery('ul.fn_filter a.active').data('filter-value');
		if(currentCat == 'undefined'){currentCat = '';}
		doAjaxCall(currentCat, pageNumber);
		return false;
	});
	jQuery('.arlo_fn_ajax_pagination ul.ajax_pagination li a.prev').on('click', function(){
		if(jQuery(this).hasClass('inactive')) {return false;}
		pageNumber--;
		var currentCat = jQuery('ul.fn_filter a.active').data('filter-value');
		if(currentCat == 'undefined'){currentCat = '';}
		doAjaxCall(currentCat, pageNumber);
		return false;
	});
}

// AJAX CALL
function doAjaxCall(currentCategory, page){
	"use strict";


	var requestData = {
		action: 'arlo_fn_ajax_service_list',
		arlo_fn_cat: currentCategory,
		arlo_fn_page: page
	};
	jQuery.ajax({
		type: 'POST',
		url: fn_ajax_object.fn_ajax_url,
		cache: true,
		data: requestData,
		success: function(data, textStatus, XMLHttpRequest) {
			frenifyAjaxProcess(data);
		},
		error: function(MLHttpRequest, textStatus, errorThrown) {
			console.log('Error');
		}
	});	
}
function frenifyAjaxProcess(data){
	"use strict";
	console.log(data);
	var fnQueriedObj = jQuery.parseJSON(data); //get the data object
	var ul 		= jQuery('ul.arlo_fn_portfolio_list');
	var spinner	= jQuery('.arlo_fn_portfolio_category_filter span.spinner');
	ul.html(fnQueriedObj.arlo_fn_data);
	
	//hide or show prev
	if ( true === fnQueriedObj.arlo_fn_hide_prev ) {
		jQuery('.arlo_fn_ajax_pagination ul li a.prev').addClass('inactive');
	} else {
		jQuery('.arlo_fn_ajax_pagination ul li a.prev').removeClass('inactive');
	}

	//hide or show next
	if ( true === fnQueriedObj.arlo_fn_hide_next ) {
		jQuery('.arlo_fn_ajax_pagination ul li a.next').addClass('inactive');
	} else {
		jQuery('.arlo_fn_ajax_pagination ul li a.next').removeClass('inactive');
	}
	
	portfolioListHeightRegular();
	spinner.removeClass('active');
	arlo_fn_dataBgImg();
	arlo_fn_imgToSvg();
	jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
}
function portfolioListHeightRegular(){
	"use strict";
	var listIn	= jQuery('.arlo_fn_portfolio_page .portfolio_list_in');
	listIn.removeClass('active').css({height:'auto'});
}
// -----------------------------------------------------
// ------------    11. JUSTIFIED IMAGES    -------------
// -----------------------------------------------------
function arlo_fn_justified_images(){
	"use strict";
	var justified = jQuery(".arlo_fn_justified_images");
	justified.each(function(){
		var element 	= jQuery(this);
		var justHeight	= element.attr('data-just-h');
		var justGutter	= element.attr('data-just-g');
		if(typeof(justHeight) !== 'undefined' && typeof(justGutter) !== 'undefined'){
			if(justHeight !== ''){justHeight = justHeight;}
			if(justGutter !== ''){justGutter = justGutter;}
		}else{justHeight = 300;justGutter = 10;}
		if(jQuery().justifiedGallery){
			element.justifiedGallery({
				rowHeight : justHeight,
				lastRow : 'nojustify',
				margins : justGutter,
				refreshTime: 500,
				refreshSensitivity: 0,
				maxRowHeight: null,
				border: 0,
				captions: false,
				randomize: false
			});
		}
	});
	var just 	= jQuery('.arlo_fn_portfolio_justified');
	var justg	= just.attr('data-gutter');
	if(typeof(justg) !== 'undefined'){
		just.find('.j_list').css({paddingLeft:justg+'px',paddingRight:justg+'px'});
		just.css({marginTop: justg + 'px'});
	}
}
// -----------------------------------------------------
// -------------   12. STICKY SIDEBAR    ---------------
// -----------------------------------------------------
function frenify_fn_sticky_sidebar(){
	"use strict";
	
	if(jQuery().theiaStickySidebar){
		jQuery('.frenify_fn_sticky_sidebar').theiaStickySidebar({
			containerSelector: '', // The sidebar's container element. If not specified, it defaults to the sidebar's parent.
			additionalMarginTop: 50,
			additionalMarginBottom: 0,
			updateSidebarHeight: true, // Updates the sidebar's height. Use this if the background isn't showing properly, for example.
			minWidth: 1200, // The sidebar returns to normal if its width is below this value. 
		});
	}
}
// -----------------------------------------------------
// ----------    13. ALL PAGES MIN HEIGHT   ------------
// -----------------------------------------------------
function arlo_fn_allpages_height(){
	"use strict";
	
	var wrapperForH	 	= jQuery('.arlo_fn_wfh'),
		footer		 	= jQuery('.arlo_fn_footer'),
		mobMenu		 	= jQuery('.arlo_fn_mobilemenu_wrap'),
		footerH			= 0,
		adminBarH		= 0,
		mobMenuH		= 0,
		H				= jQuery(window).height(),
		W				= jQuery(window).width(),
		body			= jQuery('body');
	
	if(body.hasClass('admin-bar')){
		if(W<782){
			adminBarH		= 46;
		}else{
			adminBarH		= 32;
		}
	}
	
	if(footer.length){
		footerH			= jQuery('.arlo_fn_footer').outerHeight();
	}
	if(mobMenu.length){
		mobMenuH		= jQuery('.arlo_fn_mobilemenu_wrap').outerHeight();
	}
	if(W<=1040){
		mobMenuH		= mobMenuH;
	}else{
		mobMenuH		= 0;
	}
	// FOR ALL PAGES
	wrapperForH.css({minHeight:(H-footerH-adminBarH-mobMenuH) + 'px'});
}
// -----------------------------------------------------
// ---------------    14. MASONSRY    ------------------
// -----------------------------------------------------
function arlo_fn_isotope(){
	"use strict";
	var masonry = jQuery('.arlo_fn_masonry');
	if(jQuery().isotope){
		masonry.each(function(){
			jQuery(this).isotope({
			  itemSelector: '.arlo_fn_masonry_in',
			  masonry: {

			  }
			});
		});
	}
}
// -----------------------------------------------------
// -------------    15. POSTS' SHAPES    ---------------
// -----------------------------------------------------
function arlo_fn_postShapes(){
	"use strict";
	var post = jQuery('ul.arlo_fn_postlist li > div');
	if(post.length){
		post.each(function(){
			var el 		= jQuery(this);
			var width	= Math.floor(el.width() - 100);
			var shape	= el.find('span.shape2');
			if(width > 0){
				if(shape.length){
					shape.css({borderLeftWidth:width + 'px'});
				}
			}
		});
	}
	var blogSingle 	= jQuery('.arlo_fn_blog_single .fn-format-img');
	if(blogSingle.length){
		var width2		= Math.floor(blogSingle.width() - 100);
		var shape2 		= blogSingle.find('.shape2');
		if(width2 > 0){
			if(shape2.length){
				shape2.css({borderLeftWidth:width2 + 'px'});
			}
		}
	}
}
// -----------------------------------------------------
// -------------    16. TOLL FREE CALC    --------------
// -----------------------------------------------------
function arlo_fn_tollFreeCalc(){
	"use strict";
	var tollFree 	= jQuery('.arlo_fn_header .toll_free');
	if(tollFree.length){
		var shape2	= tollFree.find('span.shape2');
		var shape3	= tollFree.find('span.shape3');
		var tfoh	= tollFree.outerHeight();
		shape2.css({borderTopWidth: (tfoh - 18) + 'px'});
		shape3.css({borderTopWidth: tfoh + 'px'});
	}
	var tollFreeM 	= jQuery('.arlo_fn_mobilemenu_wrap .m_toll_free');
	if(tollFreeM.length){
		var shape2M	= tollFreeM.find('span.shape2');
		var shape3M	= tollFreeM.find('span.shape3');
		var tfohM	= tollFreeM.outerHeight();
		shape2M.css({borderTopWidth: (tfohM - 18) + 'px'});
		shape3M.css({borderTopWidth: tfohM + 'px'});
	}
}
// -----------------------------------------------------
// ----------------    17. SELECT2    ------------------
// -----------------------------------------------------
function arlo_fn_allSelect2(){
	"use strict";
	jQuery('.orderby').each(function(){jQuery(this).select2();});
	jQuery('select[name="archive-dropdown"]').each(function(){jQuery(this).select2();});
}
// -----------------------------------------------------
// -------------    STICKY NAVIGATION    ---------------
// -----------------------------------------------------
function arlo_fn_stickyNavInitialHide(){
	"use strict";
	
	var nav 	= jQuery('.arlo_fn_header_sticky');
	if(nav.length){
		var navH 	= nav.outerHeight(true, true);nav.css({top:(-navH) + 'px'});
	}
		
}

function arlo_fn_sticky_nav(){
	"use strict";
	var nav 	= jQuery('.arlo_fn_header_sticky');
	if(nav.length){
		var currentScroll = '';
		var lastScroll = '';
		var direction = '';

		if(nav.hasClass('on')){
			jQuery(window).on('scroll', function(){
				currentScroll = jQuery(this).scrollTop();

				if(currentScroll > lastScroll){
					direction = 'down';	
					lastScroll = currentScroll;
				}
				else if(currentScroll < lastScroll){
					direction = 'up';	
					lastScroll = currentScroll;	
				}

				if(currentScroll > 300 && direction === 'up') {
					if(!nav.hasClass('opened')){
						nav.addClass('opened');
					}
				}
				else{nav.removeClass('opened');}
			});
		}
	}
}
function arlo_fn_tagline_focus(){
	"use strict";
	var tagline = jQuery('.arlo_fn_tagline');
	if(tagline.length){
		var inputText  	= tagline.find('input[type=text]');
		var inputSubmit	= tagline.find('input[type=submit]');
		jQuery('body').on('click',function(){
			tagline.removeClass('focused');
		});
		inputText.on('click',function(event){
			tagline.addClass('focused');
			event.stopPropagation();
		});
		inputSubmit.on('click',function(event){
			event.stopPropagation();
		});
	}
}



// -----------------------------------------------------
// ------------    FIXED MOVING SUBMENU    -------------
// -----------------------------------------------------
function arlo_fn_fixedsub(){
	"use strict";
	var fixedsub 			= jQuery('#arlo_fn_fixedsub');
	var li					= jQuery('.arlo_fn_header .menu_nav ul.vert_nav > li');
	var leftpartW			= jQuery('.arlo_fn_header').width();
	var rightpart			= jQuery('.arlo_fn_wfh, .arlo_fn_header .menu_logo');
	var adminBar 			= 0;
	if(jQuery('body').hasClass('admin-bar')){
		adminBar  = 32;
	}
	fixedsub.css({left:leftpartW});
	
	
	li.on('mouseenter', function(){
		var parentLi 		= jQuery(this);
		var subMenu			= parentLi.children('ul.sub-menu');
		var subMenuHtml 	= subMenu.html();
		//parentLi;
		if(subMenu.length){
			li.removeClass('hovered');
			parentLi.addClass('hovered').parent().addClass('hovered');
			fixedsub.removeClass('opened').children('ul').html('').html(subMenuHtml);
			fixedsub.addClass('opened');
		}else{
			fixedsub.removeClass('opened');
			li.removeClass('hovered').parent().removeClass('hovered');
		}
		var topOffSet 		= parentLi.offset().top;
		var menuBar			= jQuery('.arlo_fn_header');
		var menuBarOffSet	= menuBar.offset().top;
		var asd				= topOffSet-menuBarOffSet+adminBar;
		leftpartW = jQuery('.arlo_fn_header').width();
		
		
		fixedsub.css({top:asd,left:leftpartW});
		
		abc();
	});
	function abc(){
		rightpart.on('mouseenter', function(){
			fixedsub.removeClass('opened');
			li.removeClass('hovered').parent().removeClass('hovered');
		});
	}
	abc();
}
function arlo_fn_fixedsubReCalc(){
	"use strict";
	var fixedsub 	= jQuery('#arlo_fn_fixedsub');
	var leftpartW	= jQuery('.arlo_fn_header').width();
	
	if(jQuery('body').hasClass('rtl')){
		fixedsub.css({right:leftpartW});
	}else{
		fixedsub.css({left:leftpartW});
	}
}
function arlo_fn_submenuH(){
	"use strict";
	var menuBarH	= jQuery('.arlo_fn_header').outerHeight();
	var menuLogoH	= jQuery('.arlo_fn_header .menu_logo').outerHeight();
	var menuNav		= jQuery('.arlo_fn_header .menu_nav');
	var tagline		= jQuery('.arlo_fn_tagline');
	var taglineH	= tagline.outerHeight();
	var a = 0;
	if(tagline.length){
		a = taglineH;
	}
	menuNav.css({height:menuBarH-menuLogoH-a});
}
function arlo_fn_menubarScroll(){
	"use strict";
	arlo_fn_submenuH();
	var div = jQuery('.arlo_fn_header .menu_nav');
	if(jQuery().niceScroll){
		div.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #333"
		});
	}
}
function arlo_fn_jarallax(){
	"use strict";
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
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
}
function arlo_fn_menuCloser(){
	"use strict";
	var switcherOpener				= jQuery('.arlo_fn_header .header_closer');
	var wrapper						= jQuery('.arlo_fn_wrapper_all');
	
	switcherOpener.on('click',function(){
		if(wrapper.hasClass('menu_opened')){
			wrapper.removeClass('menu_opened');
		}else{
			wrapper.addClass('menu_opened');
		}
		if(jQuery('.jarallax').length){
			jQuery('.jarallax').jarallax('destroy');
			setTimeout(function(){
				arlo_fn_jarallax();
				arlo_fn_isotope();
			},300);
		}
		setTimeout(function(){
			arlo_fn_isotope();
		},300);
		return false;
	});
}