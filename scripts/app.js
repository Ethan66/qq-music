(function(){

    fetch('json/rec.json')
        .then(res => res.json())
        .then(render)

    function render(json){
        console.log(json)
        let slides = json.data.slider.map(slide => ({link: slide.linkUrl, image: slide.picUrl}))
        new Slider({
            el: document.querySelector("#slider"),
            slides
        })
    }
})()