"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
    function Search(el) {
        _classCallCheck(this, Search);

        this.$el = el;
        this.$input = this.$el.querySelector(".search");
        this.$songs = this.$el.querySelector(".search-content ul");
        this.$singer = this.$el.querySelector(".search-content .singer");
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
            if (keyword == '') {
                this.$songs.innerHTML = "";
                this.$singer.innerHTML = '';
            }
            if (event.key !== "Enter") return;
            this.searchSinger(keyword);
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
        key: "searchSinger",
        value: function searchSinger(keyword) {
            var _this2 = this;

            fetch("http://localhost:4000/search?keyword=" + keyword + "&page=" + this.page).then(function (res) {
                return res.json();
            }).then(function (json) {
                return json.data.zhida;
            }).then(function (zhida) {
                return _this2.appendSinger(zhida);
            });
        }
    }, {
        key: "appendSinger",
        value: function appendSinger(zhida) {
            var singerHtml = "\n        <div class=\"img\">\n                        <img src=\"https://y.gtimg.cn/music/photo_new/T001R68x68M000000aHmbL2aPXWH.jpg?max_age=2592000\" />\n                    </div>\n                    <div class=\"text\">\n                        <h4>" + zhida.singername + "</h4>\n                        <p>\u5355\u66F2: <span>" + zhida.songnum + "</span> \u4E13\u8F91: <i>" + zhida.albumnum + "</i></p>\n                    </div>";

            this.$singer.innerHTML = singerHtml;
        }
    }, {
        key: "append",
        value: function append(songs, singer) {
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