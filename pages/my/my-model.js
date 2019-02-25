import { Api } from '../../util/api';

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
}

export { My }