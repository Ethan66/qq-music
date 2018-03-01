"use strict";

(function () {

    fetch('json/rec.json').then(function (res) {
        return res.json();
    }).then(render);

    function render(json) {
        console.log(json);
        var slides = json.data.slider.map(function (slide) {
            return { link: slide.linkUrl, image: slide.picUrl };
        });
        new Slider({
            el: document.querySelector("#slider"),
            slides: slides
        });
    }
})();
//# sourceMappingURL=app.js.map