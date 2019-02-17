

import { Api } from '../../util/api';

const api = new Api();


class Home {
    constructor(){
        
    }
    //轮播图
    getBannerData(callback) {
        let params = {
            url:"/api/bannerImage",
            type:'GET',
            callback,
            data:{}
        }
       
        api.request(params);

    }
    //主题
    getThemeData(callback) {
        let params = {
            url:"/api/themeImage",
            type:'GET',
            callback,
            data:{}
        }
       
        api.request(params);
    }
    //产品
    getProductData(callback) {
        let params = {
            url:'/api/productImage',
            type:'GET',
            callback,
            data:{}
        }

        api.request(params);

    }
    
}


export { Home }
