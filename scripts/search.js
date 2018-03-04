class Search{
    constructor(el) {
        this.$el = el
        this.$input = this.$el.querySelector(".search")
        this.$songs = this.$el.querySelector(".search-content ul")
        this.$input.addEventListener("keyup",this.onKeyUp.bind(this))
        this.keyword = ''
        this.page = 1
        this.songs = []
        this.perpage = 20
    }

    onKeyUp(event){
        let keyword = event.target.value.trim()
        console.log(keyword)
        if(keyword == '') return this.$songs.innerHTML = ""
        if(event.key !== "Enter") return
        this.search(keyword)
    }

    search(keyword){
        this.keyword = keyword
        fetch(`http://localhost:4000/search?keyword=${this.keyword}&page=${this.page}`)
            .then(res => res.json())
            .then(json => json.data.song.list)
            .then(songs => this.append(songs))
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
        this.$songs.innerHTML = html
    }
}