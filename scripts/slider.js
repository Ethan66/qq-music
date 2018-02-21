class Slider{
    constructor(options = {}){
        console.log(options)
        this.$el = options.el
        this.slides = options.slides
        this.index = 0
        this.render()
        this.start()
    }

    render(){
        this.$el.innerHTML = '<div class="qq-slider-wrap"></div>'
        this.$wrap = this.$el.firstElementChild
        this.$wrap.style.width = `${this.slides.length*100}%`
        this.$wrap.innerHTML = this.slides.map(slide=>
            `<div class="qq-slider-item">\
                <a href="${slide.link}">\
                    <img src="${slide.image}">\
                </a>\
            </div>`
        ).join("")
    }

    start(){
        setInterval(this.next.bind(this),3000)
    }

    next(){
        this.index += 1
        if(this.index === this.slides.length){
            this.index = 0
            this.$wrap.style.transform = 'translateX(0)'
        }
        let x = `-${this.index/this.slides.length*100}%`
        this.$wrap.style.transform = `translateX(${x})`
    }

