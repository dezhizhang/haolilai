// pages/my/my.js
import { My } from './my-model';
import { Address } from '../../util/address';
import { Order } from '../order/order-model';


const my = new My();
const address = new Address();
const order = new Order();



Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.loadData();
      this.getAddressInfo();
      this.getOrderInfo();



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
      if(res.code == 200 && res.success ==true) {

      }
    });

  },

  //获取订单信息
  getOrderInfo:function() {
    order.getOrders(this.data.pageIndex,(res) => {
      if(res.code ==200 && res.success == true) {
         this.setData({
           orderArr:res.data
         })
      }

    })
  }


  
})