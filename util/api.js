 

import { Config } from './config';
import { Token } from './token';


class Api {
    constructor() {

    }

    request(params,noRefetch) {
        let that = this;

        wx.request({
            url:Config.baseURL+params.url,
            method:params.type || 'GET',
            data:params.data,
            header:{
              'content-type':'application/json',
              'token':wx.getStorageSync('token')
            },
            success:function(res) {
              let code = res.statusCode.toString();
              let startChar = code.charAt(0);

              if(startChar =='2') {
                params.callback &&  params.callback(res.data)
              } else{
                if(code == '401') {

                  if(!noRefetch) {
                    that.refetch(params)
                  }
                  
                }
                params.eCallback && params.eCallback(res.data)
              }

            
            
            },
            fail:function(err) {

            }
        })
    }

    //重新向服务器发起数据
    refetch(params) {
      let token = new Token();
      token.getTokenFromServer((token) => {
        this.request(params,true);

      })

    }
}

export { Api }