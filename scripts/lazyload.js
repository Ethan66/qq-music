function lazyload(images){
    let imgs = [].slice.call(images)

    window.addEventListener("scroll",scrollEvent)

    function scrollEvent() {
        if(!imgs.length) {
            return window.removeEventListener("scroll",scrollEvent)
        }
        imgs = imgs.filter(img => img.classList.contains("lazyload"))
        imgs.forEach(img => {
            if(inViewport(img)) {
                loadImage(img)
            }
        })
    }
}

function inViewport(img){
    let {top, right, bottom, left} = img.getBoundingClientRect()
    let vpWidth = document.documentElement.clientWidth
    let vpHeight = document.documentElement.clientHeight
    return (
        (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) &&
        (left > 0 && left < vpWidth || right > 0 && right< vpWidth)
    )
}

function loadImage(img){
    let image = new Image()
    image.src = img.dataset.src
    image.onload = function(){
        img.src = image.src
        img.classList.remove("lazyload")
    }
}