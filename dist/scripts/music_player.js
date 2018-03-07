"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MusicPlayer = function () {
    function MusicPlayer(el) {
        _classCallCheck(this, MusicPlayer);

        this.$el = el;
        this.$el.addEventListener("click", this.clickEvent.bind(this));
        this.createAuto();
        new ProgressBar(this.$el.querySelector(".progress"), 280, true);
    }

    _createClass(MusicPlayer, [{
        key: "createAuto",
        value: function createAuto() {
            this.$auto = document.createElement("auto");
            this.$auto.loop = true;
            document.body.appendChild(this.$auto);
        }
    }, {
        key: "clickEvent",
        value: function clickEvent(event) {
            var target = event.target;
            switch (true) {
                case target.matches(".icon-pause"):
                    this.onPause(event);
                    break;
                case target.matches(".icon-play"):
                    this.onPlay(event);
                    break;
            }
        }
    }, {
        key: "onPause",
        value: function onPause(event) {
            var target = event.target;
            target.classList.remove("icon-pause");
            target.classList.add("icon-play");
        }
    }, {
        key: "onPlay",
        value: function onPlay(event) {
            var target = event.target;
            target.classList.remove("icon-play");
            target.classList.add("icon-pause");
        }
    }]);

    return MusicPlayer;
}();
//# sourceMappingURL=music_player.js.map