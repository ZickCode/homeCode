;(function($){
	var Banner = {
		//初始化
		_init: function(){
			var _this = this;
			_this.banner = $('.banner');
			_this.leftBtn = _this.banner.find('.left');
			_this.rightBtn = _this.banner.find('.right');
			_this.ul = _this.banner.find('ul');
			_this.li = _this.ul.find('li');
			_this.pointer = _this.banner.find('.pointer');
			_this.liW = _this.banner.width();
			_this.liLeng = _this.li.length;
			_this.index = 0;
			_this._render();
			_this._addEvent();
		},
		//渲染
		_render: function(){
			var _this = this;
			_this.li.width(_this.liW);
			_this.ul.width(_this.liLeng * _this.liW);
			for(var i=0;i<_this.liLeng;i++){
				_this.pointer.append('<i></i>');
			}
			_this.pointer.find('i').eq(0).addClass('on');
		},
		//事件绑定
		_addEvent: function(){
			var _this = this;
			//左,右箭头切换事件
			_this.rightBtn.click(function(){
				_this._move(true);
			})
			_this.leftBtn.click(function(){
				_this._move(false);
			});
			//自动轮播事件
			_this.timer = setInterval(function(){
				_this._move(true);
			},2000);
			//hover时,显示切换按钮，停止轮播
			_this.banner.hover(function(){
				_this.leftBtn.show();
				_this.rightBtn.show();
				clearInterval(_this.timer);
			},function(){
				_this.leftBtn.hide();
				_this.rightBtn.hide();
				_this.timer = setInterval(function(){
					_this._move(true);
				},2000);
			});
			//点击小圆点切换
			_this.pointer.find('i').click(function(){
				var ulLeft = $(this).index()*_this.liW + 'px';
				_this.ul.stop(true).animate({left : '-'+ulLeft},1000,'swing');
				$(this).addClass('on').siblings().removeClass('on');
			});
			//窗口变化重新渲染
			$(window).resize(function(){		
				_this.li.width(_this.liW);		
				_this.ul.width(_this.liLeng * _this.liW);
			});
		},
		//移动
		_move: function(flag){
			var _this = this;
			if(flag){
				_this.index++;
				if(_this.index == _this.liLeng) _this.index = 0;
			}else{
				_this.index--;
				if(_this.index == -1) _this.index = _this.liLeng - 1;
			}
			_this.pointer.find('i').eq(_this.index).addClass('on').siblings().removeClass('on');
			var ulLeft = _this.index*_this.liW + 'px';
			_this.ul.stop(true).animate({left : '-'+ulLeft},1000,'swing');
		}
	}
	Banner._init();
})(jQuery);
