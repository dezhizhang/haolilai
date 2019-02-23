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

  isCenterCity(name) {
      let centerCitys = ['北京市','天津市','上海市','重庆市'];
      let flag = centerCitys.indexOf(name) >= 0;
      return flag;

  }
}

export { Address }