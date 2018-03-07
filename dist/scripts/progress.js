"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressBar = function () {
    function ProgressBar(el, duration, start) {
        _classCallCheck(this, ProgressBar);

        this.$el = el;
        this.elapsed = 0;
        this.duration = duration;
        this.render();
        this.$elapsed = this.$el.querySelector(".elapsed");
        this.$duration = this.$el.querySelector(".duration");
        this.$progressBar = this.$el.querySelector(".progress-bar .bar");
        this.$elapsed.innerText = this.formatTime(0);
        this.$duration.innerText = this.formatTime(this.duration);
        if (start) this.start();
    }

    _createClass(ProgressBar, [{
        key: "render",
        value: function render() {
            var html = "\n                <div class=\"progress-time elapsed\"></div>\n                <div class=\"progress-bar\"><p class=\"bar\"></p></div>\n                <div class=\"progress-time duration\"></div>";
            this.$el.innerHTML = html;
        }
    }, {
        key: "start",
        value: function start() {
            this.intervalId = setInterval(this.update.bind(this), 50);
        }
    }, {
        key: "pause",
        value: function pause() {
            clearInterval(this.intervalId);
        }
    }, {
        key: "update",
        value: function update() {
            this.elapsed += 0.05;
            this.$progressBar.style.transform = "translateX(" + (this.elapsed / this.duration * 100 - 100) + "%)";
            this.$elapsed.innerText = this.formatTime(this.elapsed);
            if (this.elapsed > this.duration) this.reset();
        }
    }, {
        key: "reset",
        value: function reset(duration) {
            this.pause();
            this.elapsed = 0;
            if (duration) {
                this.duration = duration;
                this.$duration = this.formatTime(this.duration);
            }
        }
    }, {
        key: "formatTime",
        value: function formatTime(time) {
            var min = parseInt(time / 60);
            var second = parseInt(time) % 60;
            if (min < 10) min = '0' + min;
            if (second < 10) second = '0' + second;
            return min + ":" + second;
        }
    }]);

    return ProgressBar;
}();
//# sourceMappingURL=progress.js.map