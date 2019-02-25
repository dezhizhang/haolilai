
import { Api } from './api';
const api = new Api();


class Address {
  constructor() {
    

  }

  //设置收货地址
  setAddressInfo(res) {
    let province = res.provinceName || res.province;
    let city = res.cityName || res.city;
    let country = res.countyName || res.country;
    let detail = res.detailInfo || res.detail;

    let totalDetail = city + country + detail;


    if(!this.isCenterCity(province)) {
        totalDetail = province + totalDetail;

    }

    return totalDetail;


  }

  //获取用户收货地址
  getAddressInfo(callback) {
    let that = this;
    let params = {
       url:'api/user/address',
       sCallback:function(res) {
         if(res) {
            res.totalDetail = that.setAddressInfo(res);
            callback && callback(res);

         }
       }
    }
    api.request(params);

  }
   
  //栓测是否是直峡市
  isCenterCity(name) {
      let centerCitys = ['北京市','天津市','上海市','重庆市'];
      let flag = centerCitys.indexOf(name) >= 0;
      return flag;

  }

  //保存用户收货地址
  submitAddress(data,callback) {
    data = this.setUpAddress(data);
    let params = {
      url:'api/user/address',
      type:'POST',
      data:data
    }
    api.request(params);

  }
  //修改地址
  setUpAddress(res) {
    let formData = {
      name:res.userName,
      province:res.provinceName,
      city:res.cityName,
      country:res.countyName,
      mobile:res.telNumber,
      detail:res.detailInfo
    }
    return formData
  }
}

export { Address }