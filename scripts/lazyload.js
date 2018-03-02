function lazyload(images){
    let imgs = [].slice.call(images)

    let scrollEvent = throttle(function() {
        console.log(new Date())
            if(!imgs.length) {
                return window.removeEventListener("scroll",scrollEvent)
            }
            imgs = imgs.filter(img => img.classList.contains("lazyload"))
            imgs.forEach(img => {
                if(inViewport(img)) {
                    loadImage(img)
                }
            })
        },500)

    window.addEventListener("scroll",scrollEvent)
    window.dispatchEvent(new Event('scroll'))
}



function throttle(fn,time){
    let prev, timer
    return function func(){
        let cur = new Date()
        let diff = cur - prev
        if(!prev || diff >= time) {
            fn()
            prev = cur
        } else if(diff <= time){
            clearTimeout(timer)
            timer = setTimeout(func, diff - time)
        }
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