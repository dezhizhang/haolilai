

import { Api } from '../../util/api';

const api = new Api();


class Home {
    constructor(){
        
    }
    getBannerData(id,callback) {
        let params = {
            url:"/api/bannerImage",
            type:'GET',
            callback,
            data:{}
        }
       
        api.request(params);

    }
    getProductData(id,callback) {
        let params = {
            url:"/api/themeImage",
            type:'GET',
            callback,
            data:{}
        }
       
        api.request(params);
    }
    
}


export { Home }
