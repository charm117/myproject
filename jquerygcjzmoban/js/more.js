$(function() {

	//banner
	var isTouch = Modernizr.touch,
		isMobile = false,
		mobile = false,
		w_width = 0,
		w_height = 0,
		navItem = 0,
		h_height = 0,
		roll = 0,
		produs = 0,
		ST = 0;
		var _mousemove;
		var _click;
		var _mousedown;
		var _mouseup;

	function setImgMax(img, imgW, imgH, tW, tH) {
		var tWidth = tW || w_width;
		var tHeight = tH || w_height;
		var coe = imgH / imgW;
		var coe2 = tHeight / tWidth;
		if(coe < coe2) {
			var imgWidth = tHeight / coe;
			img.css({
				height: tHeight,
				width: imgWidth,
				left: -(imgWidth - tWidth) / 2,
				top: 0
			});
		} else {
			var imgHeight = tWidth * coe;
			img.css({
				height: imgHeight,
				width: tWidth,
				left: 0,
				top: -(imgHeight - tHeight) / 2
			});
		};
	};
	
	function initBox() {
		var w_width = $(window).width();
		var w_height = $(window).height();
		$('.banner').css('height', w_height);
		$('.banner .bannerfix >li').css('height', w_height);
		setImgMax($('.banner .bannerfix li .bimg'), 1920, 908, w_width, w_height);
	
	};
	initBox();	
	
	

	//	slider滚动配置

	jQuery(function() {
		var bannersider = jQuery(".banner");
		bannersider.flexslider({
			animation: "fade",

			easing: "swing",

			slideshowSpeed: 6000,

			animationSpeed: 0,

			pauseOnAction: false,

			directionNav: false,

			controlNav: true,

			start: function(slider) {

				jQuery('.banner .bannerfix li').eq(slider.currentSlide).addClass("imgIn").siblings().removeClass("imgIn");

				jQuery(".bamnline").addClass("load");

			},

			after: function(slider) {

				jQuery('.banner .bannerfix li').eq(slider.currentSlide).addClass("imgIn").siblings().removeClass("imgIn");

				jQuery(".bamnline").addClass("load");

			},

			before: function(slider) {

				jQuery(".bamnline").removeClass("load");

			}

		});

	});

	//	导航滚动
	function topsrcro() {
		var scoll = $(window).scrollTop();
		scoll > 1 ? $(".barwrap").addClass("on") : $(".barwrap").removeClass("on");
	}

	$(window).scroll(topsrcro);

	topsrcro();

	//	浏览器判断

	if(/msie (6.0|7.0|8.0|9.0)/i.test(navigator.userAgent)) {
		window.location.href = 'abandoned.html';
	}

	//	搜索框

	$('.zoom').click(function() {
		$('.search-box').addClass('active')
		$('.search-box .div').addClass('on')
	})

	$('.search-close').click(function() {
		$('.search-box').removeClass('active')
		$('.search-box .div').removeClass('on')
	})




	
//	//	内页滚动视察banner
//	function pageBox() {
//		w_width = jQuery(window).width();
//		w_height = jQuery(window).height();
//		var levah = $(".leval-box").outerHeight();
//		$('.caseimg').css('height', w_height - levah);
//		$('.caseimg figure').css('height', w_height - levah);
//		setImgMax($('.caseimg figure img'), 1920, 500, w_width, w_height - levah);
//		
//	}
	jQuery(window).scroll(function() {
		w_height = jQuery(window).height();
		var windowTop = jQuery(window).scrollTop();
		if(windowTop < w_height) {
			jQuery('.pbanner figure img').css('transform', "translate(0px," + (windowTop) / 2.8 + "px)");
		};
	});	
//	pageBox();
	jQuery(window).resize(function() {
		initBox();
//		pageBox();
	});
	
})