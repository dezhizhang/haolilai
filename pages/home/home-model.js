

class Home {
    constructor(){
        
    }
    getBannerData(id) {
        wx.request({
            url:'http://localhost:7001/getBanner'+id,
            method:'GET',
            success:function(res) {
                return res;
            }
        })
    }
}


export { Home }
