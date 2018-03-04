class Search{
    constructor(el) {
        this.$el = el
        this.$input = this.$el.querySelector(".search")
        this.$songs = this.$el.querySelector(".search-content ul")
        this.$singer = this.$el.querySelector(".search-content .singer")
        this.$input.addEventListener("keyup",this.onKeyUp.bind(this))
        this.keyword = ''
        this.page = 1
        this.nomore = false
        this.songs = []
        this.perpage = 20
        this.fetching = false
        window.addEventListener("scroll",this.onScroll.bind(this))
    }

    onScroll(){
        if(!this.keyword) return
        if(this.nomore) return window.removeEventListener("scroll", this.onScroll.bind(this))
        if(document.documentElement.clientHeight + pageYOffset > document.body.scrollHeight - 50) {
            this.search(this.keyword, this.page + 1)
        }
    }

    onKeyUp(event){
        let keyword = event.target.value.trim()
        console.log(keyword)
        if(keyword == '') this.reset()
        if(event.key !== "Enter") return
        this.searchSinger(keyword)
        this.search(keyword)
    }

    reset(){
        this.page = 1
        this.songs = []
        this.keyword = ''
        this.nomore = false
        this.$songs.innerHTML = ""
        this.$singer.innerHTML = ''
    }

    search(keyword, page){
        this.keyword = keyword
        if(this.fetching) return
        this.fetching = true
        fetch(`http://localhost:4000/search?keyword=${this.keyword}&page=${page || this.page}`)
            .then(res => res.json())
            .then(json => {
                this.page = json.data.song.curpage
                this.nomore = (json.message == "no results")
                return json.data.song.list
            })
            .then(songs => this.append(songs))
            .then(() => this.fetching = false)
    }

    searchSinger(keyword){
        fetch(`http://localhost:4000/search?keyword=${keyword}&page=${this.page}`)
            .then(res => res.json())
            .then(json => json.data.zhida)
            .then(zhida => this.appendSinger(zhida))
    }

    appendSinger(zhida){
        let singerHtml = `
        <div class="img">
                        <img src="https://y.gtimg.cn/music/photo_new/T001R68x68M000${zhida.singermid}.jpg?max_age=2592000" />
                    </div>
                    <div class="text">
                        <h4>${zhida.singername}</h4>
                        <p>单曲: <span>${zhida.songnum}</span> 专辑: <i>${zhida.albumnum}</i></p>
                    </div>`

        this.$singer.innerHTML = singerHtml
    }

    append(songs){
        let html = songs.map(song =>`<li>
                <div class="img">
                    <i class="icon"></i>
                </div>
                <div class="text">
                    <h4>${song.songname}</h4>
                    <p>${song.singer.map(singer => singer.name).join("/")}</p>
                </div>
            </li>`
        ).join("")
        this.$songs.innerHTML += html
    }
}