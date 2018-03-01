"use strict";

(function () {

    fetch('json/rec.json').then(function (res) {
        return res.json();
    }).then(render);

    function render(json) {
        renderSlider(json.data.slider);
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
})();
//# sourceMappingURL=app.js.map