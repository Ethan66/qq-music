class MusicPlayer{
    constructor(el){
        this.$el = el
        this.$el.addEventListener("click",this.clickEvent.bind(this))
        this.createAuto()
    }

    createAuto(){
        this.$auto = document.createElement("auto")
        this.$auto.loop = true
        document.body.appendChild(this.$auto)
    }

    clickEvent(event){
        let target = event.target
        switch(true) {
            case target.matches(".icon-pause"):
                this.onPause(event)
                break
            case target.matches(".icon-play"):
                this.onPlay(event)
                break
        }
    }

    onPause(event){
        let target = event.target
        target.classList.remove("icon-pause")
        target.classList.add("icon-play")
    }

    onPlay(event){
        let target = event.target
        target.classList.remove("icon-play")
        target.classList.add("icon-pause")
    }
}