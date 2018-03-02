const express = require("express")
const request = require("request-promise")
const app = express()

const HEADERS = {
    "authority": "c.y.qq.com",
    "origin": "https://m.y.qq.com",
    "referer": "https://m.y.qq.com/",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
}

app.get('/', async (req,res) =>{
    const url = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=840115334&uin=425734130&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+new Date()}`
    try{
        res.json(await request({
            url: url,
            json: true,
            headers: HEADERS
        }))
    }catch(e){
        res.json({
            error: e.message
        })
    }
})

app.get('/search',async(req,res) =>{
    const {keyword, page = 1} = req.query
    const url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=840115334&uin=425734130&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${encodeURIComponent(keyword)}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=${page}&remoteplace=txt.mqq.all&_=${+new Date()}`
    try{
        res.json(await request({
            url: url,
            json: true,
            headers: HEADERS
        }))
    }catch(e){
        res.json({
            error: e.message
        })
    }
})

app.listen(4000)

//  curl 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=840115334&uin=425734130&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E6%9D%8E&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1519995879103' -H 'origin: https://m.y.qq.com' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: zh-CN,zh;q=0.9' -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1' -H 'accept: application/json' -H 'referer: https://m.y.qq.com/' -H 'authority: c.y.qq.com' -H 'cookie: pgv_pvi=8577560576; yq_index=0; RK=BA1mmFFrO+; pac_uid=1_2064281269; aboutVideo_v=0; tvfe_boss_uuid=bc2945cab09fb14d; o_cookie=425734130; pgv_si=s792745984; ptisp=ctc; ptcz=0f8479f573892fc355567c607bb9cc8ca235b468849aed95e846eaee5f76d834; uin=o0425734130; skey=@sLBG8bueE; pt2gguin=o0425734130; yqq_stat=0; ts_refer=ADTAGmyqq; ts_uid=8672378250; pgv_info=ssid=s4509992225; pgv_pvid=3637322940' --compressed