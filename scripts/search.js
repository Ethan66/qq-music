class Search{
    constructor(el) {
        this.$el = el
        this.$input = this.$el.querySelector(".search")
        this.$input.addEventListener("keyup",this.onKeyUp.bind(this))
        this.keyword = ''
        this.page = 1
        this.songs = []
        this.perpage = 20
    }

    onKeyUp(event){
        let keyword = event.target.value.trim()
        console.log(keyword)
        if(event.key !== "Enter") return
        this.search(keyword)
    }

    search(keyword){

    }
}