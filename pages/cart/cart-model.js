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

    getCartDataFromLocal() {
        let res = wx.getStorageSync();
        if(!res) {
            res = [];

        }
            return res;
            
    }

    isHasThatOne(id,arr) {
       let item = null;
       let result = { index: -1 };

       for(let i=0;i<arr.length;i++){
           item = arr[i];
           if(item.id == id) {
            
                result = {
                    index:1,
                    data:item
                }
               break
           }
       }
       return result;

    }
    
}


export { Cart } 