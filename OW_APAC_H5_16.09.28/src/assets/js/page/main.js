'use strict';

$(function () {
	var _imgUrl = '';
	_imgUrl = 'http://cimg.178.com/swxf/APAC/assets/';
	//简化判断是否是移动端打开
	var ua = navigator.userAgent;
	var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
	    isMobile = isIphone || isAndroid;

	var pageIndex = {
		init: function init() {
			var self = this;
			self.preload();
		},
		render: function render() {
			var self = this;
			//页面适配
			var docElement = document.documentElement,
			    metaElement = document.querySelector('meta[name="viewport"]'),
			    styleElement = document.createElement("style"),
			    version,
			    screenScale = 1,
			    originScreenW = 750,
			    originScreenH = 1333,
			    screenW = window.screen.width,
			    screenH = window.screen.height;
			screenScale = parseInt(screenW) / 750;
			if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
				version = parseFloat(RegExp.$1);
				if (version > 2.3) {
					metaElement.setAttribute("content", "width=750,minimum-scale=" + screenScale + ",maximum-scale=" + screenScale + ",target-densitydpi=device-dpi");
				} else {
					metaElement.setAttribute("content", "width=750,target-densitydpi=device-dpi");
				}
			} else {
				metaElement.setAttribute("content", "width=750,user-scalable=no,target-densitydpi=device-dpi");
			}
			//加载投票
			$.ajax({
				url: 'http://ow.766.com/db/other/activity/owApacChineH5',
				type: 'get',
				dataType: 'jsonp',
				jsonp: 'callback',
				data: {},
				success: function success(data) {
					if (data.code == 1) {
						var china = data.result.china,
						    world = data.result.world,
						    allNum = china + world;
						china = parseInt(china / allNum * 100);
						world = parseInt(world / allNum * 100);
						$('.process-left').width(china + '%');
						$('.process-right').width(world + '%');
						$('.icon-line').css('left', china + '%');
					}
				}
			});
			self.initSwiper();
		},
		bindEvent: function bindEvent() {
			//投票事件
			$('.vote-btns').find('.btn').on('click', function () {
				var flag = $(this).attr('data-info'),
				    voteNum = $(this).parent().attr('data-flag'),
				    voteFlag;
				if (flag == 'left') {
					voteFlag = 'world';
				} else {
					voteFlag = 'china';
				}
				if (voteNum == 1) {
					$.ajax({
						url: 'http://ow.766.com/db/other/activity/owApacChineH5',
						type: 'get',
						dataType: 'jsonp',
						jsonp: 'callback',
						data: { voteType: voteFlag },
						success: function success(data) {
							if (data.code == 1) {
								alert('投票成功');
							}
						}
					});
					$(this).parent().attr('data-flag', '0');
					$(this).parent().find('.btn').css({ 'border-color': '#424242', 'color': '#424242' });
				} else {
					alert('只能投一次哦');
				}
			});
		},
		//初始化swiper
		initSwiper: function initSwiper() {
			//页面swiper
			var ms = new Swiper('.J-swiper-container', {
				direction: 'vertical',
				mousewheelControl: true,
				initialSlide: 0,
				onInit: function onInit(swiper) {
					swiperAnimateCache(swiper);
					swiperAnimate(swiper);
				},
				onSlideChangeEnd: function onSlideChangeEnd(swiper) {
					swiperAnimate(swiper);
				}
			});
			//小组赛地图
			var mapSwiper = new Swiper('.J-map-swiper', {
				spaceBetween: 8,
				nextButton: '.map-swiper-next',
				prevButton: '.map-swiper-prev'
			});
			//小组赛英雄
			var heroSwiper = new Swiper('.J-hero-swiper', {
				spaceBetween: 8,
				nextButton: '.hero-swiper-next',
				prevButton: '.hero-swiper-prev'
			});
			//八强赛明星选手
			var famousPlayer = new Swiper('.J-famous-player', {
				loop: true,
				pagination: '.swiper-pagination',
				prevButton: '.famous-player-prev',
				nextButton: '.famous-player-next',
				effect: 'coverflow',
				initialSlide: 0,
				slidesPerView: 3,
				centeredSlides: true,
				coverflow: {
					rotate: 0,
					stretch: 10,
					depth: 100,
					modifier: 1,
					slideShadows: true
				}
			});
			//总决赛地图
			var chinaFinalMap = new Swiper('.J-china-final-map', {
				spaceBetween: 8,
				pagination: '.china-final-map-pagination',
				nextButton: '.china-final-map-next',
				prevButton: '.china-final-map-prev'
			});
			//总决赛英雄
			var chinaFinalHero = new Swiper('.J-china-final-hero', {
				spaceBetween: 8,
				nextButton: '.china-final-hero-next',
				prevButton: '.china-final-hero-prev'
			});
		},
		//预加载
		preload: function preload() {
			var self = this;
			//preload加载
			var queue = new createjs.LoadQueue(true),
			    loadingNum;
			queue.on("fileload", handleFileLoad, self);
			queue.on("complete", handleComplete, self);
			queue.on("progress", handleProgress, self);
			//加载图片
			queue.loadFile(_imgUrl + "images/back.jpg");
			queue.loadFile(_imgUrl + "images/back-index.jpg");
			queue.loadFile(_imgUrl + "images/part-team-img.png");
			queue.loadFile(_imgUrl + "images/process_line.png");
			queue.loadFile(_imgUrl + "images/sprite.png");

			function handleFileLoad() {} //单
			function handleComplete(event) {}
			//队列
			function handleProgress(event) {
				loadingNum = parseInt(event.progress * 100);
				if (loadingNum == 100) {
					if (!isMobile) {
						pageResponse({
							selectors: '.wrap',
							mode: 'contain',
							width: '750',
							height: '1337'
						});
					}
					self.render();
					self.bindEvent();
				}
			}
		}
	};

	pageIndex.init();
});