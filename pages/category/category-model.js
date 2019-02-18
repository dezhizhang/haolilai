

import { Api } from '../../util/api';

const api = new Api();


class Categofry {
    constructor(){
        
    }
    //获取所有分类
    getCategoryType(callback) {
        let params = {
            url:"/api/categoryType",
            type:'GET',
            callback,
            data:{}
        }
       
        api.request(params);

    }

    //获取所有分类数据的id
    getCategoryProduct(id,callback) {
        let params = {
            url:'/api/categoryProduct?id=' + id,
            type:'GET',
            callback,
            data:{}
        }

        api.request(params)
    }
}


export { Categofry }
