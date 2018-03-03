(function(){

    fetch('json/rec.json')
        .then(res => res.json())
        .then(render)

    function render(json){
        renderSlider(json.data.slider)
        renderRadios(json.data.radioList)
        renderPlayLists(json.data.songList)
    }

    fetch('json/rank.json')
        .then(res => res.json())
        .then(renderRank)

    function renderRank(json){
        renderRankLists(json.data.topList)
    }

    function renderSlider(slides){
        slides = slides.map(slide => ({link: slide.linkUrl, image: slide.picUrl}))
        new Slider({
            el: document.querySelector("#slider"),
            slides
        })
    }

    let search = new Search(document.querySelector(".search-view"))

    function renderRadios(radios){
        document.querySelector(".radios .list").innerHTML = radios.map(radio =>
        `<div class="list-item">
            <a href="">
                <div class="list-media">
                    <img class="lazyload" data-src="${radio.picUrl}" src="${radio.picUrl}" />
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
                    <img class="lazyload" data-src="${playList.picUrl}" src="${playList.picUrl}" />
                    <span class="icon icon-play"></span>
                </div>
                <div class="info">
                    <h3 class="title">${playList.songListDesc}</h3>
                </div>
            </a>
        </div>`).join("")
    }

    function renderRankLists(topLists){
        document.querySelector(".rank-view .list").innerHTML = topLists.map(topList => {
            let num,countNum = topList.listenCount
            if(countNum / 10000 > 1){
                let integer = parseInt(countNum / 10000)
                let decimal = parseInt(countNum % 10000 / 1000)
                num = integer + '.' + decimal + '万'
            } else{

            }
            return `<li class="list-item">
                <div class="img">
                    <a href="">
                        <img class="lazyload" data-src="${topList.picUrl}" />
                        <span class="listen-count">
                            <i class="icon"></i>
                            <span class="num">${num}</span>
                        </span>
                    </a>
                </div>
                <div class="text">
                    <h3>${topList.topTitle}</h3>
                    <p>1 <span>${topList.songList[0].songname}</span> - ${topList.songList[0].singername}</p>
                    <p>2 <span>${topList.songList[1].songname}</span> - ${topList.songList[1].singername}</p>
                    <p>3 <span>${topList.songList[2].songname}</span> - ${topList.songList[2].singername}</p>
                    <i class="arrow"></i>
                </div>
            </li>`
            }
            ).join("")
    }
})()