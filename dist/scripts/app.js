"use strict";

(function () {

    fetch('json/rec.json').then(function (res) {
        return res.json();
    }).then(render);

    function render(json) {
        renderSlider(json.data.slider);
        renderRadios(json.data.radioList);
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
            return "<div class=\"list-item\">\n            <a href=\"\">\n                <div class=\"list-media\">\n                    <img src=\"" + radio.picUrl + "\" />\n                    <span class=\"icon icon-play\"></span>\n                </div>\n                <div class=\"info\">\n                    <h3 class=\"title\">" + radio.Ftitle + "</h3>\n                </div>\n            </a>\n        </div>";
        }).join("");
    }
})();
//# sourceMappingURL=app.js.map