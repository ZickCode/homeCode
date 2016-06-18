//顶部焦点广告位
(function ($) {
    var slider = {
        //初始化
        init: function () {
            var _this = this;
            _this.container = $('.focus');
            _this.warp = $('ul', _this.container);
            _this.datas = $('li', _this.warp);
            _this.index = 0;
            _this.timer = null;
            _this._render();
            _this._bindEvent();
        }, //渲染
        _render: function () {
            var _this = this;
            _this.objWidth = _this.container.width();
            _this.warp.width(_this.objWidth * _this.datas.length);
            _this.datas.width(_this.objWidth);
        }, //事件绑定
        _bindEvent: function () {
            var _this = this;
            _this.timer = setInterval(function () {
                _this._show(false);
            }, 2000);
            _this.container.hover(function () {
                $('.foucusNav', _this.container).show();
                clearInterval(_this.timer);
            }, function () {
                $('.foucusNav', _this.container).hide();
                _this.timer = setInterval(function () {
                    _this._show(false);
                }, 2000);
            });
            $('.foucusNav.left', _this.container).unbind('click')
                .click(function () {
                    _this._show(true)
                })
            $('.foucusNav.right', _this.container).unbind('click')
                .click(function () {
                    _this._show(false)
                })
            //窗口大小变化重新渲染
            $(window).resize(function (event) {
                if (_this.timer) {
                    clearInterval(_this.timer);
                }
                _this._render();
                _this.timer = setInterval(function () {
                    _this._show(true);
                }, 2000);
            });
        }, //移动
        _show: function (flag) {
            var _this = this;
            if (!flag) {
                _this.index++;
                if (_this.index === _this.datas.length) {
                    _this.index = 0;
                }
            } else {
                _this.index--;
                if (_this.index === -1) {
                    _this.index = _this.datas.length - 1;
                }
            }  
            _this.warp.stop(true, true).animate({
                "left": "-" + _this.objWidth * _this.index
            }, 1000,'easeInOutExpo');
        }
    }
    slider.init();
})(jQuery);