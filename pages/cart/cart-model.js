import { Api } from '../../util/api';

const api = new Api();

class Cart {
    constructor() {
        this.storageKeyName = 'cart';

    }

    add(item,counts) {
      
        let cartData = this.getCartDataFromLocal();

        let isHasInfo = this.isHasThatOne(item.id,cartData);

        if(isHasInfo.index == -1) {
            item.counts = counts;
            item.selectStatus = true;
            cartData.push(item);

        } else {
        
            cartData[isHasInfo.index].counts += counts;
           
        }

        wx.setStorageSync(this.storageKeyName,cartData);


    }

    //获取缓存数据
    getCartDataFromLocal() {
        let res = wx.getStorageSync(this.storageKeyName);
        if(!res) {
            res = [];

        }
            return res;
            
    }

    //获取缓存中的商品数量
    getCartTotalCounts(flag) {
        let data = this.getCartDataFromLocal();
        let counts = 0;
        data.map((item,index) => {
            if(item.selectStatus == flag) {
                counts += item.counts;
            } else {
                counts += item.counts;
            }
           
        })

        return counts;


    }

    isHasThatOne(id,arr) {
       let item = null;
       let result = { index: -1 };

       for(let i=0;i<arr.length;i++){
           item = arr[i];
           if(item.id == id) {
                result = {
                    index:i,
                    data:item
                }
               break
           }
       }
       return result;

    }
    
}


export { Cart } 