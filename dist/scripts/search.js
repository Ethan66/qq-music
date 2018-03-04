"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
    function Search(el) {
        _classCallCheck(this, Search);

        this.$el = el;
        this.$input = this.$el.querySelector(".search");
        this.$songs = this.$el.querySelector(".search-content ul");
        this.$input.addEventListener("keyup", this.onKeyUp.bind(this));
        this.keyword = '';
        this.page = 1;
        this.songs = [];
        this.perpage = 20;
    }

    _createClass(Search, [{
        key: "onKeyUp",
        value: function onKeyUp(event) {
            var keyword = event.target.value.trim();
            console.log(keyword);
            if (event.key !== "Enter") return;
            this.search(keyword);
        }
    }, {
        key: "search",
        value: function search(keyword) {
            var _this = this;

            this.keyword = keyword;
            fetch("http://localhost:4000/search?keyword=" + this.keyword + "&page=" + this.page).then(function (res) {
                return res.json();
            }).then(function (json) {
                return json.data.song.list;
            }).then(function (songs) {
                return _this.append(songs);
            });
        }
    }, {
        key: "append",
        value: function append(songs) {
            var html = songs.map(function (song) {
                return "<li>\n                <div class=\"img\">\n                    <i class=\"icon\"></i>\n                </div>\n                <div class=\"text\">\n                    <h4>" + song.songname + "</h4>\n                    <p>" + song.singer.map(function (singer) {
                    return singer.name;
                }).join("/") + "</p>\n                </div>\n            </li>";
            }).join("");
            this.$songs.innerHTML = html;
        }
    }]);

    return Search;
}();
//# sourceMappingURL=search.js.map