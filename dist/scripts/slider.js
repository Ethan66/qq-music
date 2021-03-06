'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Slider);

        console.log(options);
        this.$el = options.el;
        this.slides = options.slides;
        this.index = 0;
        this.render();
        this.start();
    }

    _createClass(Slider, [{
        key: 'render',
        value: function render() {
            this.$el.innerHTML = '<div class="qq-slider-wrap"></div>';
            this.$wrap = this.$el.firstElementChild;
            this.$wrap.style.width = this.slides.length * 100 + '%';
            this.$wrap.innerHTML = this.slides.map(function (slide) {
                return '<div class="qq-slider-item">                <a href="' + slide.link + '">                    <img src="' + slide.image + '">                </a>            </div>';
            }).join("");
        }
    }, {
        key: 'start',
        value: function start() {
            setInterval(this.next.bind(this), 3000);
        }
    }, {
        key: 'next',
        value: function next() {
            this.index += 1;
            if (this.index === this.slides.length) {
                this.index = 0;
                this.$wrap.style.transform = 'translateX(0)';
                return;
            }
            var x = '-' + this.index / this.slides.length * 100 + '%';
            this.$wrap.style.transform = 'translateX(' + x + ')';
        }
    }]);

    return Slider;
}();
//# sourceMappingURL=slider.js.map