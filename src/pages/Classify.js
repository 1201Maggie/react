import React,{Component} from "react";
import Footer from "../layouts/Footer";
import $ from 'jquery'
import {Link} from "react-router-dom"
import '../assets/css/core.css'

class classify extends Component {
  render() {
    return (
  <>
    <header className="aui-header-default aui-header-fixed ">
      <a href="#" className="aui-header-item">
        <i className="aui-icon aui-icon-back"></i>
      </a>
      <div className="aui-header-center aui-header-center-clear">
        <div className="aui-header-search-box">
          <i className="aui-icon aui-icon-small-search"></i>
          <input type="text" className="aui-header-search"/>
        </div>
      </div>
      <a href="#" className="aui-header-item-icon">
        <i className="aui-icon aui-icon-packet"></i>
        <i className="aui-icon aui-icon-member"></i>
      </a>
    </header>
    <section className="aui-scroll-contents">
      <div className="aui-scroll-box" data-ydui-scrolltab>
        <div className="aui-scroll-nav">
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">热门推荐</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">美容彩妆</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">母婴专区</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">箱包配饰</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">家居个护</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">营养保健</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">服饰鞋靴</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">数码家电</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">运动户外</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">汽车用品</div>
          </a>
          <a href="#" className="aui-scroll-item aui-crt">
            <div className="aui-scroll-item-icon"></div>
            <div className="aui-scroll-item-text">生活旅行</div>
          </a>
        </div>
        <div className="aui-scroll-content">
          <div className="aui-scroll-content-item">
            <div className="aui-className-img">
              <img src="/img/cf-4.jpg" alt=""/>
            </div>
            <h2 className="aui-scroll-content-title">热门推荐</h2>
            <section className="aui-grid-content">
              <div className="aui-grid-row aui-grid-row-clear">
                <a href="my-products-className.html" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-1.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">手机数码</p>
                </a>
                <a href="my-products-className.html" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-2.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">笔记本</p>
                </a>
                <a href="my-products-className.html" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-3.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">空调</p>
                </a>
                <a href="my-products-className.html" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-4.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">儿童文学</p>
                </a>
                <a href="my-products-className.html" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-5.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">啤酒</p>
                </a>
                <a href="my-products-className.html" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-6.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">海参</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-7.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">床</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-8.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">衣物清洁</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-9.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">羽绒服</p>
                </a>
              </div>
            </section>
          </div>
          <div className="aui-scroll-content-item">
            <div className="aui-className-img">
              <img src="/img/cf-8.jpg" alt=""/>
            </div>
            <h2 className="aui-scroll-content-title">美容彩妆</h2>
            <section className="aui-grid-content">
              <div className="aui-grid-row aui-grid-row-clear">
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-1.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">手机数码</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-2.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">笔记本</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-3.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">空调</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-4.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">儿童文学</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-5.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">啤酒</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-6.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">海参</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-7.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">床</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-8.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">衣物清洁</p>
                </a>
                <a href="#" className="aui-grid-row-item">
                  <i className="aui-icon-large aui-icon-sign"><img src="/img/x-sf-9.jpg" alt=""/></i>
                  <p className="aui-grid-row-label">羽绒服</p>
                </a>
              </div>
            </section>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">母婴专区</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-15.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">箱包配饰</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-32.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">家居个护</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-31.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">营养保健</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-19.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">服饰鞋靴</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-18.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">数码家电</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-17.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">运动户外</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-16.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">汽车用品</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-15.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
          <div className="aui-scroll-content-item">
            <strong className="aui-scroll-content-title">生活旅行</strong>
            <div style={{height: 300}}>
              <Link to="/list"  className="aui-grid-row-item" style={{width:0}}>
                <i className="aui-icon-large aui-icon-sign">
                <img src='/img/sf-12.jpg' style={{height: 300,width:325,'display':'block'}}/></i>
                <p className="aui-grid-row-label"></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
  </>
    )
  }
  componentDidMount() {
    /**
     * ydui main
     */
    !function (window) {
        "use strict";

        var doc = window.document,
            ydui = {};

        /**
         * 直接绑定FastClick
         */
        $(window).on('load', function () {
            typeof FastClick == 'function' && FastClick.attach(doc.body);
        });

        var util = ydui.util = {
            /**
             * 格式化参数
             * @param string
             */
            parseOptions: function (string) {
                if ($.isPlainObject(string)) {
                    return string;
                }

                var start = (string ? string.indexOf('{') : -1),
                    options = {};

                if (start != -1) {
                    try {
                        options = (new Function('', 'var json = ' + string.substr(start) + '; return JSON.parse(JSON.stringify(json));'))();
                    } catch (e) {
                    }
                }
                return options;
            },
            /**
             * 页面滚动方法【移动端】
             * @type {{lock, unlock}}
             * lock：禁止页面滚动, unlock：释放页面滚动
             */
            pageScroll: function () {
                var fn = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                };
                var islock = false;

                return {
                    lock: function () {
                        if (islock)return;
                        islock = true;
                        doc.addEventListener('touchmove', fn);
                    },
                    unlock: function () {
                        islock = false;
                        doc.removeEventListener('touchmove', fn);
                    }
                };
            }(),
            /**
             * 本地存储
             */
            localStorage: function () {
                return storage(window.localStorage);
            }(),
            /**
             * Session存储
             */
            sessionStorage: function () {
                return storage(window.sessionStorage);
            }(),
            /**
             * 序列化
             * @param value
             * @returns {string}
             */
            serialize: function (value) {
                if (typeof value === 'string') return value;
                return JSON.stringify(value);
            },
            /**
             * 反序列化
             * @param value
             * @returns {*}
             */
            deserialize: function (value) {
                if (typeof value !== 'string') return undefined;
                try {
                    return JSON.parse(value);
                } catch (e) {
                    return value || undefined;
                }
            }
        };

        /**
         * HTML5存储
         */
        function storage (ls) {
            return {
                set: function (key, value) {
                    ls.setItem(key, util.serialize(value));
                },
                get: function (key) {
                    return util.deserialize(ls.getItem(key));
                },
                remove: function (key) {
                    ls.removeItem(key);
                },
                clear: function () {
                    ls.clear();
                }
            };
        }

        /**
         * 判断css3动画是否执行完毕
         * @git http://blog.alexmaccaw.com/css-transitions
         * @param duration
         */
        $.fn.emulateTransitionEnd = function (duration) {
            var called = false,
                $el = this;

            $(this).one('webkitTransitionEnd', function () {
                called = true;
            });

            var callback = function () {
                if (!called) $($el).trigger('webkitTransitionEnd');
            };

            setTimeout(callback, duration);
        };

        if (typeof define === 'function') {
            define(ydui);
        } else {
            window.YDUI = ydui;
        }

    }(window);
    /**
     * ScrollTab Plugin
     */
    !function (window) {
        "use strict";

        function ScrollTab (element, options) {
            this.$element = $(element);
            this.options = $.extend({}, ScrollTab.DEFAULTS, options || {});
            this.init();
        }

        ScrollTab.DEFAULTS = {
            navItem: '.aui-scroll-item',
            content: '.aui-scroll-content',
            contentItem: '.aui-scroll-content-item',
            initIndex: 0
        };

        ScrollTab.prototype.init = function () {
            var _this = this,
                $element = _this.$element,
                options = _this.options;

            _this.$navItem = $element.find(options.navItem);
            _this.$content = $element.find(options.content);
            _this.$contentItem = $element.find(options.contentItem);

            _this.scrolling = false;
            _this.contentOffsetTop = _this.$content.offset().top;

            _this.bindEvent();

            _this.movePosition(_this.options.initIndex, false);
        };

        ScrollTab.prototype.bindEvent = function () {
            var _this = this;

            _this.$content.on('resize.ydui.scrolltab scroll.ydui.scrolltab', function () {
                _this.checkInView();
            });

            _this.$navItem.on('click.ydui.scrolltab', function () {
                _this.movePosition($(this).index(), true);
            });
        };

        ScrollTab.prototype.movePosition = function (index, animate) {
            var _this = this;

            if (_this.scrolling)return;
            _this.scrolling = true;

            _this.$navItem.removeClass('aui-crt');
            _this.$navItem.eq(index).addClass('aui-crt');

            var $item = _this.$contentItem.eq(index);
            if (!$item[0])return;

            var offset = $item.offset().top;

            var top = offset + _this.$content.scrollTop() - _this.contentOffsetTop + 1;

            _this.$content.stop().animate({scrollTop: top}, animate ? 200 : 0, function () {
                _this.scrolling = false;
            });
        };

        ScrollTab.prototype.checkInView = function () {
            var _this = this;

            if (_this.scrolling)return;

            if (_this.isScrollTop()) {
                _this.setClass(0);
                return;
            }

            if (_this.isScrollBottom()) {
                _this.setClass(_this.$navItem.length - 1);
                return;
            }

            _this.$contentItem.each(function () {
                var $this = $(this);

                if ($this.offset().top <= _this.contentOffsetTop) {
                    _this.setClass($this.index());
                }
            });
        };

        ScrollTab.prototype.setClass = function (index) {
            this.$navItem.removeClass('crt').eq(index).addClass('crt');
        };

        ScrollTab.prototype.isScrollTop = function () {
            return this.$content.scrollTop() == 0;
        };

        ScrollTab.prototype.isScrollBottom = function () {
            var _this = this;

            return _this.$content.scrollTop() + 3 >= _this.$contentItem.height() * _this.$contentItem.length - _this.$content.height();
        };

        function Plugin (option) {
            var args = Array.prototype.slice.call(arguments, 1);

            return this.each(function () {
                var target = this,
                    $this = $(target),
                    scrollTab = $this.data('ydui.scrolltab');

                if (!scrollTab) {
                    $this.data('ydui.scrolltab', (scrollTab = new ScrollTab(target, option)));
                }

                if (typeof option == 'string') {
                    scrollTab[option] && scrollTab[option].apply(scrollTab, args);
                }
            });
        }

        $(window).on('load.ydui.scrolltab', function () {
            $('[data-ydui-scrolltab]').each(function () {
                var $this = $(this);
                $this.scrollTab(window.YDUI.util.parseOptions($this.data('ydui-scrolltab').toString()));
            });
        });

        $.fn.scrollTab = Plugin;

    }(window);

    /**
     * ydui.util
     */
    !function (window) {
        "use strict";

        var util = window.YDUI.util = window.YDUI.util || {},
            doc = window.document;

        /**
         * 日期格式化
         * @param format 日期格式 {%d天}{%h时}{%m分}{%s秒}{%f毫秒}
         * @param time 单位 毫秒
         * @returns {string}
         */
        util.timestampTotime = function (format, time) {
            var t = {},
                floor = Math.floor;

            t.f = time % 1000;
            time = floor(time / 1000);
            t.s = time % 60;
            time = floor(time / 60);
            t.m = time % 60;
            time = floor(time / 60);
            t.h = time % 24;
            t.d = floor(time / 24);

            var ment = function (a) {
                if (a <= 0) {
                    return '';
                }
                return '$1' + (a < 10 ? '0' + a : a) + '$2';
            };

            format = format.replace(/\{([^{]*?)%d(.*?)\}/g, ment(t.d));
            format = format.replace(/\{([^{]*?)%h(.*?)\}/g, ment(t.h));
            format = format.replace(/\{([^{]*?)%m(.*?)\}/g, ment(t.m));
            format = format.replace(/\{([^{]*?)%s(.*?)\}/g, ment(t.s));
            format = format.replace(/\{([^{]*?)%f(.*?)\}/g, ment(t.f));

            return format;
        };

        /**
         * js倒计时
         * @param format 时间格式 {%d}天{%h}时{%m}分{%s}秒{%f}毫秒
         * @param time 结束时间时间戳 毫秒
         * @param speed 速度
         * @param callback ret 倒计时结束回调函数 ret 时间字符 ；ret == '' 则倒计时结束
         * DEMO: YDUI.util.countdown('{%d天}{%h时}{%m分}{%s秒}{%f毫秒}', Date.parse(new Date()) + 60000, 1000, function(ret){ console.log(ret); });
         */
        util.countdown = function (format, time, speed, callback) {
            var that = this;
            var timer = setInterval(function () {
                var l_time = time - new Date().getTime();
                if (l_time > 0) {
                    callback(that.timestampTotime(format, l_time));
                } else {
                    clearInterval(timer);
                    typeof callback == 'function' && callback('');
                }
            }, speed);
        };

        /**
         * js 加减乘除
         * @param arg1 数值1
         * @param op 操作符string 【+ - * /】
         * @param arg2 数值2
         * @returns {Object} arg1 与 arg2运算的精确结果
         */
        util.calc = function (arg1, op, arg2) {
            var ra = 1, rb = 1, m;

            try {
                ra = arg1.toString().split('.')[1].length;
            } catch (e) {
            }
            try {
                rb = arg2.toString().split('.')[1].length;
            } catch (e) {
            }
            m = Math.pow(10, Math.max(ra, rb));

            switch (op) {
                case '+':
                case '-':
                    arg1 = Math.round(arg1 * m);
                    arg2 = Math.round(arg2 * m);
                    break;
                case '*':
                    ra = Math.pow(10, ra);
                    rb = Math.pow(10, rb);
                    m = ra * rb;
                    arg1 = Math.round(arg1 * ra);
                    arg2 = Math.round(arg2 * rb);
                    break;
                case '/':
                    arg1 = Math.round(arg1 * m);
                    arg2 = Math.round(arg2 * m);
                    m = 1;
                    break;
            }
            try {
                var result = eval('(' + '(' + arg1 + ')' + op + '(' + arg2 + ')' + ')/' + m);
            } catch (e) {
            }
            return result;
        };

        /**
         * 读取图片文件 并返回图片的DataUrl
         * @param obj
         * @param callback
         */
        util.getImgBase64 = function (obj, callback) {
            var that = this, dataimg = '', file = obj.files[0];
            if (!file)return;
            if (!/image\/\w+/.test(file.type)) {
                that.tipMes('请上传图片文件', 'error');
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                dataimg = this.result;
                typeof callback === 'function' && callback(dataimg);
            };
        };

        /**
         * 获取地址栏参数
         * @param name
         * @returns {*}
         */
        util.getQueryString = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
                r = window.location.search.substr(1).match(reg),
                qs = '';
            if (r != null)qs = decodeURIComponent(r[2]);
            return qs;
        };

        /**
         * Cookie
         * @type {{get, set}}
         */
        util.cookie = function () {
            return {
                /**
                 * 获取 Cookie
                 * @param  {String} name
                 * @return {String}
                 */
                get: function (name) {
                    var m = doc.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
                    return (m && m[1]) ? decodeURIComponent(m[1]) : '';
                },
                /**
                 * 设置 Cookie
                 * @param {String}  name 名称
                 * @param {String}  val 值
                 * @param {Number} expires 单位（秒）
                 * @param {String}  domain 域
                 * @param {String}  path 所在的目录
                 * @param {Boolean} secure 跨协议传递
                 */
                set: function (name, val, expires, domain, path, secure) {
                    var text = String(encodeURIComponent(val)),
                        date = expires;

                    // 从当前时间开始，多少小时后过期
                    if (typeof date === 'number') {
                        date = new Date();
                        date.setTime(date.getTime() + expires * 1000);
                    }

                    date instanceof Date && (text += '; expires=' + date.toUTCString());

                    !!domain && (text += '; domain=' + domain);

                    text += '; path=' + (path || '/');

                    secure && (text += '; secure');

                    doc.cookie = name + '=' + text;
                }
            }
        }();
    }(window);
    $('[data-ydui-scrolltab]').each(function () {
        var $this = $(this);
        $this.scrollTab(window.YDUI.util.parseOptions($this.data('ydui-scrolltab').toString()));
    });
}
 // 数据请求（预载）
//  componentWillMount() {
//     const { goodsStore } = this.props;
//      goodsStore.getList();
//  }
}

export default classify;