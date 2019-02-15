

import { Api } from '../../util/api';

const api = new Api();


class Home {
    constructor(){
        
    }
    getBannerData(id,callback) {
        let params = {
            url:"/api/v1/topics",
            type:'GET',
            callback,
            data:{}
        }
       
        api.request(params);

    }
}


export { Home }
