import { Api } from '../../util/api';

const api = new Api();


class Product {
    //商品详情
    getDetailInfo(id,callback) {
        let params = {
            url:'/api/productDetail?id=' + id,
            type:'GET',
            callback,
            data:{}
        }
        api.request(params);

    }
}

export { Product } 