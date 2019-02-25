import { Api } from '../../util/api';

const api = new Api();


class Order {
    constructor() {
        this.storageKeyName = 'newOrder';

    }

    doOrder(param,callback) {
    
        let that = this;
        let allParams = {
            url:'/api/order/pay',
            type:'POST',
            data:{ products:param },
            sCallback:function(data) {
                that.execSetStorageSync(true);
                callback && callback(data)
            },

            eCallback:function() {

            }
        
        }

        api.request(allParams);

    }

    execSetStorageSync(data) {
       wx.setStorageSync(this.storageKeyName,data)
    }

}

export { Order };

