

import { Api } from '../../util/api';

const api = new Api();


class Home {
    constructor(){
        
    }
    getBannerData(id,callBack) {
       
        api.request({
            url:'/api/v1/topics',
            type:'GET',
            data:{},
            callBack

        })
    }
}


export { Home }
