(function(){

    fetch('json/rec.json')
        .then(res => res.json())
        .then(render)

    function render(json){
        renderSlider(json.data.slider)

    }

    function renderSlider(slides){
        slides = slides.map(slide => ({link: slide.linkUrl, image: slide.picUrl}))
        new Slider({
            el: document.querySelector("#slider"),
            slides
        })
    }
})()