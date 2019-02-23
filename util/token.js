class Token {
    constructor() {

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
                url:'http://localhost:7001',
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

    }

}

export { Token }
