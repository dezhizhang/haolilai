
import { Config } from './config';

class Token {
    constructor() {
        this.verifyURL = Config.baseURL + '/api/token/verify';
        this.tokenURL = Config.baseURL + '/api/token/user';

    }
    verify() {
       let token = wx.getStorageSync('token');
        if(!token) {
            this.getTokenFromServer();

        } else {
            //栓测令牌是否失效
            this.verifyFromServer(token);

        }
    }
    //从服各器获取toke
    getTokenFromServer(callback) {
        let that = this;
        wx.login({
            success:function(res) {
             wx.request({
                url:that.tokenURL,
                method:'POST',
                data:{
                     code:res.code
                },
                success:function(res) {
                   wx.setStorageSync('token',res.data.token);
                   callback && callback(res.data.token);

                }


             })
            }
        })
    }

    //从服务器栓测令牌是否失效
    verifyFromServer(token) {
      let that = this;
      wx.request({
            url:that.verifyURL,
            method:'POST',
            data:{
                token:token
            },
            success:function(res) {
                let valid = res.data.isValid;
                if(!valid) {
                    that.getTokenFromServer();
                    
                }
            }
      })
    }

}

export { Token }
