"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var text = "[ti&#58;江南1&#95;A&#32;1&#45;2]&#10;[ar&#58;&#32;]&#10;[al&#58;]&#10;[by&#58;]&#10;[offset&#58;0]&#10;[00&#58;00&#46;26]江南&#32;&#40;Live&#41;&#32;&#45;&#32;林忆莲/林俊杰&#10;[00&#58;00&#46;99]词：李瑞洵&#10;[00&#58;01&#46;89]曲：林俊杰&#10;[00&#58;02&#46;04]原唱：林俊杰&#10;[00&#58;02&#46;24]编曲：Kenn&#32;C/James&#32;Yeo&#64;Kenn&#32;C&#32;Music&#10;[00&#58;02&#46;50]制作人：陈君豪/恭硕良&#10;[00&#58;03&#46;63]音乐总监：刘卓&#10;[00&#58;03&#46;85]音响总监：金少刚&#10;[00&#58;04&#46;11]吉他：Derrick&#32;Sepnio&#10;[00&#58;04&#46;28]键盘：林俊杰/刘卓/Fergus&#32;Chow&#10;[00&#58;04&#46;63]Program：尹岳洋&#10;[00&#58;04&#46;79]贝斯：Ray&#32;Vaughn&#10;[00&#58;04&#46;95]鼓手：恭硕良&#10;[00&#58;05&#46;15]和音：朱江/刘芳/张炜/关冰效&#10;[00&#58;05&#46;64]弦乐：靳海音®弦乐团&#10;[00&#58;05&#46;96]和音编写：恭硕良/林忆莲/潘琪妮&#10;[00&#58;07&#46;50]&#10;[00&#58;11&#46;33]执行制作：钟潍宇&#10;[00&#58;13&#46;10]&#10;[00&#58;31&#46;87]女：&#10;[00&#58;31&#46;87]风到这里就是粘&#10;[00&#58;34&#46;56]&#10;[00&#58;35&#46;89]粘住过客的思念&#10;[00&#58;39&#46;20]&#10;[00&#58;41&#46;02]雨到了这里缠成线&#10;[00&#58;44&#46;22]&#10;[00&#58;45&#46;48]缠着我们流连人世间&#10;[00&#58;49&#46;77]&#10;[00&#58;50&#46;89]你在身边就是缘&#10;[00&#58;53&#46;64]&#10;[00&#58;55&#46;12]缘分写在三生石上面&#10;[00&#58;59&#46;12]&#10;[01&#58;00&#46;49]爱有万分之一甜&#10;[01&#58;03&#46;53]&#10;[01&#58;04&#46;75]宁愿我就葬在这一天&#10;[01&#58;10&#46;45]&#10;[01&#58;12&#46;45]圈圈圆圆圈圈&#10;[01&#58;14&#46;50]天天年年天天的我&#10;[01&#58;17&#46;79]深深看你的脸&#10;[01&#58;20&#46;90]生气的温柔埋怨的温柔你的脸&#10;[01&#58;28&#46;62]&#10;[01&#58;31&#46;80]不懂爱恨情愁煎熬的我们&#10;[01&#58;35&#46;69]&#10;[01&#58;36&#46;31]都以为相爱就像风云的善变&#10;[01&#58;40&#46;45]&#10;[01&#58;41&#46;23]相信爱一天抵过永远&#10;[01&#58;45&#46;85]&#10;[01&#58;46&#46;45]在这一刹那冻结了时间&#10;[01&#58;50&#46;49]&#10;[01&#58;51&#46;14]不懂怎么表现温柔的我们&#10;[01&#58;54&#46;82]&#10;[01&#58;55&#46;59]还以为殉情只是古老的传言&#10;[01&#58;59&#46;66]&#10;[02&#58;00&#46;32]离愁能有多痛痛有多浓&#10;[02&#58;04&#46;97]&#10;[02&#58;05&#46;53]当梦被埋在江南烟雨中心碎了才懂&#10;[02&#58;13&#46;63]&#10;[02&#58;30&#46;48]圈圈圆圆圈圈&#10;[02&#58;32&#46;44]天天年年天天的我&#10;[02&#58;35&#46;79]深深看你的脸&#10;[02&#58;38&#46;92]&#10;[02&#58;40&#46;65]生气的温柔埋怨的温柔的脸&#10;[02&#58;51&#46;98]男：&#10;[02&#58;52&#46;33]不懂爱恨情愁煎熬的我们&#10;[02&#58;56&#46;15]&#10;[02&#58;56&#46;67]都以为相爱就像风云的善变&#10;[03&#58;00&#46;93]&#10;[03&#58;01&#46;45]相信爱一天抵过永远&#10;[03&#58;06&#46;64]在这一刹那冻结了时间&#10;[03&#58;10&#46;82]&#10;[03&#58;11&#46;49]不懂怎么表现温柔的我们&#10;[03&#58;16&#46;17]还以为殉情只是古老的传言&#10;[03&#58;21&#46;03]离愁能有多痛痛有多浓&#10;[03&#58;26&#46;21]当梦被埋在江南烟雨中&#10;[03&#58;30&#46;35]心碎了才懂&#10;[03&#58;37&#46;07]&#10;[03&#58;54&#46;05]女：&#10;[03&#58;54&#46;41]&#10;[04&#58;01&#46;88]不懂爱恨情愁煎熬的我们&#10;[04&#58;05&#46;93]&#10;[04&#58;06&#46;71]都以为相爱就像风云的善变&#10;[04&#58;10&#46;93]&#10;[04&#58;11&#46;79]相信爱一天抵过永远&#10;[04&#58;16&#46;40]&#10;[04&#58;16&#46;98]在这一刹那冻结了时间&#10;[04&#58;20&#46;65]&#10;[04&#58;21&#46;55]不懂怎么表现温柔的我们&#10;[04&#58;25&#46;97]还以为殉情只是古老的传言&#10;[04&#58;30&#46;78]离愁能有多痛痛有多浓&#10;[04&#58;36&#46;19]当梦被埋在江南烟雨中&#10;[04&#58;40&#46;91]&#10;[04&#58;52&#46;71]心碎了才懂&#10;[04&#58;59&#46;70]合：&#10;[05&#58;00&#46;08]&#10;[05&#58;12&#46;04]心碎了才懂";

var LyricsPlayer = function () {
    function LyricsPlayer(el) {
        _classCallCheck(this, LyricsPlayer);

        this.$el = el;
        this.elapsed = 0;
        this.text = '';
        this.index = 0;
        this.lyrics = [];
        this.reset(text);
        this.start();
    }

    _createClass(LyricsPlayer, [{
        key: "start",
        value: function start() {
            this.intervalId = setInterval(this.update.bind(this), 1000);
        }
    }, {
        key: "pause",
        value: function pause() {
            clearInterval(this.intervalId);
        }
    }, {
        key: "update",
        value: function update() {
            this.elapsed += 1;
            if (this.index === this.lyrics.length - 1) return this.reset(text);
            for (var i = this.index + 1; i < this.lyrics.length - 1; i++) {
                var seconds = this.getSeconds(this.lyrics[i]);
                if (this.elapsed === seconds && (!this.lyrics[i + 1] || this.elapsed < this.getSeconds(this.lyrics[i + 1]))) {
                    this.$lines[this.index].classList.remove("active");
                    this.$lines[i].classList.add("active");
                    this.index = i;
                    break;
                }
                if (this.index > 2) {
                    var y = -(this.index - 2) * 42;
                    this.$lyrics_text.style.transform = "translateY(" + y + "px)";
                }
            }
        }
    }, {
        key: "reset",
        value: function reset(text) {
            if (text) {
                this.text = this.formatText(text);
                console.log(this.text);
                this.lyrics = this.text.match(/^\[\d{2}:\d{2}\.\d{2}\].+$/gm);
                if (this.lyrics.length) {
                    this.render();
                    this.$lines = this.$el.querySelectorAll("p");
                    this.$lyrics_text = this.$el.querySelector(".lyrics-text");
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var div = document.createElement("div");
            div.classList.add("lyrics-text");
            var html = this.lyrics.map(function (lyrics) {
                return "<p>" + lyrics.slice(10) + "</p>";
            }).join("");
            div.innerHTML = html;
            this.$el.appendChild(div);
            /*let html =`
            <div class="lyrics-text">
                <p>江南 (Live) - 林忆莲/林俊杰</p>
                <p>词：李瑞洵</p>
                <p>原唱：林俊杰</p>
                <p>制作人：陈君豪/恭硕良</p>
                <p>江南 (Live) - 林忆莲/林俊杰</p>
                <p>词：李瑞洵</p>
                <p>原唱：林俊杰</p>
                <p>制作人：陈君豪/恭硕良</p>
                <p>江南 (Live) - 林忆莲/林俊杰</p>
                <p>词：李瑞洵</p>
                <p>原唱：林俊杰</p>
                <p>制作人：陈君豪/恭硕良</p>
            </div>`*/
        }
    }, {
        key: "formatText",
        value: function formatText(text) {
            var div = document.createElement("div");
            div.innerHTML = text;
            return div.innerText;
        }
    }, {
        key: "getSeconds",
        value: function getSeconds(line) {
            return +line.replace(/^\[(\d{2}):(\d{2}).*/, function (match, p1, p2) {
                return 60 * +p1 + +p2;
            });
        }
    }]);

    return LyricsPlayer;
}();
//# sourceMappingURL=LyricsPlayer.js.map