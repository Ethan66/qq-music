(function(){

    fetch('json/rec.json')
        .then(res => res.json())
        .then(render)

    function render(json){
        renderSlider(json.data.slider)
        renderRadios(json.data.radioList)
        renderPlayLists(json.data.songList)

    }

    function renderSlider(slides){
        slides = slides.map(slide => ({link: slide.linkUrl, image: slide.picUrl}))
        new Slider({
            el: document.querySelector("#slider"),
            slides
        })
    }

    function renderRadios(radios){
        document.querySelector(".radios .list").innerHTML = radios.map(radio =>
        `<div class="list-item">
            <a href="">
                <div class="list-media">
                    <img src="${radio.picUrl}" />
                    <span class="icon icon-play"></span>
                </div>
                <div class="info">
                    <h3 class="title">${radio.Ftitle}</h3>
                </div>
            </a>
        </div>`).join("")
    }

    function renderPlayLists(playLists){
        document.querySelector(".playLists .songList").innerHTML = playLists.map(playList =>
            `<div class="list-item">
            <a href="">
                <div class="list-media">
                    <img src="${playList.picUrl}" />
                    <span class="icon icon-play"></span>
                </div>
                <div class="info">
                    <h3 class="title">${playList.songListDesc}</h3>
                </div>
            </a>
        </div>`).join("")
    }
})()