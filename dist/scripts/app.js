'use strict';

(function () {

    fetch('json/rec.json').then(function (res) {
        return res.json();
    }).then(render);

    function render(json) {
        renderSlider(json.data.slider);
        renderRadios(json.data.radioList);
        renderPlayLists(json.data.songList);
    }

    fetch('json/rank.json').then(function (res) {
        return res.json();
    }).then(renderRank);

    function renderRank(json) {
        renderRankLists(json.data.topList);
        lazyload(document.querySelectorAll(".lazyload"));
    }

    function renderSlider(slides) {
        slides = slides.map(function (slide) {
            return { link: slide.linkUrl, image: slide.picUrl };
        });
        new Slider({
            el: document.querySelector("#slider"),
            slides: slides
        });
    }

    function renderRadios(radios) {
        document.querySelector(".radios .list").innerHTML = radios.map(function (radio) {
            return '<div class="list-item">\n            <a href="">\n                <div class="list-media">\n                    <img class="lazyload" data-src="' + radio.picUrl + '" src="' + radio.picUrl + '" />\n                    <span class="icon icon-play"></span>\n                </div>\n                <div class="info">\n                    <h3 class="title">' + radio.Ftitle + '</h3>\n                </div>\n            </a>\n        </div>';
        }).join("");
    }

    function renderPlayLists(playLists) {
        document.querySelector(".playLists .songList").innerHTML = playLists.map(function (playList) {
            return '<div class="list-item">\n            <a href="">\n                <div class="list-media">\n                    <img class="lazyload" data-src="' + playList.picUrl + '" src="' + playList.picUrl + '" />\n                    <span class="icon icon-play"></span>\n                </div>\n                <div class="info">\n                    <h3 class="title">' + playList.songListDesc + '</h3>\n                </div>\n            </a>\n        </div>';
        }).join("");
    }

    function renderRankLists(topLists) {
        document.querySelector(".rank-view .list").innerHTML = topLists.map(function (topList) {
            var num = void 0,
                countNum = topList.listenCount;
            if (countNum / 10000 > 1) {
                var integer = parseInt(countNum / 10000);
                var decimal = parseInt(countNum % 10000 / 1000);
                num = integer + '.' + decimal + '万';
            } else {}
            return '<li class="list-item">\n                <div class="img">\n                    <a href="">\n                        <img class="lazyload" data-src="' + topList.picUrl + '" />\n                        <span class="listen-count">\n                            <i class="icon"></i>\n                            <span class="num">' + num + '</span>\n                        </span>\n                    </a>\n                </div>\n                <div class="text">\n                    <h3>' + topList.topTitle + '</h3>\n                    <p>1 <span>' + topList.songList[0].songname + '</span> - ' + topList.songList[0].singername + '</p>\n                    <p>2 <span>' + topList.songList[1].songname + '</span> - ' + topList.songList[1].singername + '</p>\n                    <p>3 <span>' + topList.songList[2].songname + '</span> - ' + topList.songList[2].singername + '</p>\n                    <i class="arrow"></i>\n                </div>\n            </li>';
        }).join("");
    }
})();
//# sourceMappingURL=app.js.map