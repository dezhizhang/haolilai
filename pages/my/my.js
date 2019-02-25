// pages/my/my.js
import { My } from './my-model';
import { Address } from '../../util/address';

const my = new My();
const address = new Address();


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.loadData();
      this.getAddressInfo();


  },

  //获取用户数据
  loadData:function() {
     my.getUserInfo((data) => {
        this.setData({
          userInfo:data
        })
     })
  },

  //获取用户地址
  getAddressInfo:function() {
    address.getAddressInfo((res) => {
      console.log(res);
      
    });

  }

  
})