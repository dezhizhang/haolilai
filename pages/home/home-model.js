

class Home {
    constructor(){
        
    }
    getBannerData(id,callBack) {
        wx.request({
            url:'https://cnodejs.org/api/v1/topics',
            method:'GET',
            success:function(res) {
                callBack(res)
            }
        })
    }
}


export { Home }
