
import { Api } from '../../util/api';

const api = new Api();

class Theme {
    constructor() {

    }
    //获取主题产品数据
    getProductData(id,callback) {
        let params = {
            url:"/api/themeDetail?id="+ id,
            type:'GET',
            callback,
            data:{}
        }
       
        api.request(params);
    }
}

export { Theme }