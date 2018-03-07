class ProgressBar{
    constructor(el,duration, start){
        this.$el = el
        this.elapsed = 0
        this.duration = duration
        this.render()
        this.$elapsed = this.$el.querySelector(".elapsed")
        this.$duration = this.$el.querySelector(".duration")
        this.$progressBar = this.$el.querySelector(".progress-bar .bar")
        this.$elapsed.innerText = this.formatTime(0)
        this.$duration.innerText = this.formatTime(this.duration)
        if(start) this.start()
    }

    render(){
        let html = `
                <div class="progress-time elapsed"></div>
                <div class="progress-bar"><p class="bar"></p></div>
                <div class="progress-time duration"></div>`
        this.$el.innerHTML = html
    }
    
    start(){
        this.intervalId = setInterval(this.update.bind(this), 50)
    }

    pause(){
        clearInterval(this.intervalId)
    }

    update(){
        this.elapsed += 0.05
        this.$progressBar.style.transform = `translateX(${this.elapsed / this.duration * 100 -100}%)`
        this.$elapsed.innerText = this.formatTime(this.elapsed)
        if(this.elapsed > this.duration) this.reset()
    }

    reset(duration){
        this.pause()
        this.elapsed = 0
        if(duration) {
            this.duration = duration
            this.$duration = this.formatTime(this.duration)
        }
    }

    formatTime(time){
        let min = parseInt(time / 60)
        let second = parseInt(time) % 60
        if(min < 10) min = '0' + min
        if(second < 10) second = '0' + second
        return `${min}:${second}`
    }
}