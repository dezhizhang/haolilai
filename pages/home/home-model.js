

import { Api } from '../../util/api';

const api = new Api();


class Home {
    constructor(){
        
    }
    getBannerData(id,callBack) {
        let params = {
            url:"/api/v1/topics",
            type:'GET',
            callBack,
            data:{}
        }
       
        api.request(params);
        
    }
}


export { Home }
