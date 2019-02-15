 
const baseUrl = 'https://cnodejs.org';

class Api {
    constructor() {

    }

    request(params) {

        wx.request({
            url:baseUrl+params.url,
            method:params.type || 'GET',
            data:params.data,
            header:{
              'content-type':'application/json',
              'token':wx.getStorageSync('token')
            },
            success:function(res) {

              params.callback &&  params.callback(res.data)
            
            },
            fail:function(err) {

            }
        })
    }
}

export { Api }