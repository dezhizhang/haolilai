import { Api } from '../../util/api';
const api = new Api();


class My {
    constructor() {

    }

    getUserInfo(cb) {
        let that = this;
        wx.login({
            success:function() {
                wx.getUserInfo({
                    success:function(res) {
                        typeof cb == 'function' && cb(res.userInfo);

                    },
                    fail:function(res) {
                        typeof cb == 'function' && cb({
                            avatarUrl:'../../imgs/icon/user@default.png',
                            nickName:'多彩贵州'
                        })
                    }
                })
            }
        })
    }

    //获取用户地址
    getAddressInfo(user_id,callback) {
        console.log(user_id);
        
        let params = {
            url:'/api/user/address?user_id='+ user_id,
            type:'get',
            data:{ },
            callback
           
        
        }

        api.request(params);

    }


}

export { My }