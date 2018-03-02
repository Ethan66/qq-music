"use strict";

function lazyload(images) {
    var imgs = [].slice.call(images);

    window.addEventListener("scroll", scrollEvent);

    function scrollEvent() {
        if (!imgs.length) {
            return window.removeEventListener("scroll", scrollEvent);
        }
        imgs = imgs.filter(function (img) {
            return img.classList.contains("lazyload");
        });
        imgs.forEach(function (img) {
            if (inViewport(img)) {
                loadImage(img);
            }
        });
    }
}

function inViewport(img) {
    var _img$getBoundingClien = img.getBoundingClientRect(),
        top = _img$getBoundingClien.top,
        right = _img$getBoundingClien.right,
        bottom = _img$getBoundingClien.bottom,
        left = _img$getBoundingClien.left;

    var vpWidth = document.documentElement.clientWidth;
    var vpHeight = document.documentElement.clientHeight;
    return (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) && (left > 0 && left < vpWidth || right > 0 && right < vpWidth);
}

function loadImage(img) {
    var image = new Image();
    image.src = img.dataset.src;
    image.onload = function () {
        img.src = image.src;
        img.classList.remove("lazyload");
    };
}
//# sourceMappingURL=lazyload.js.map