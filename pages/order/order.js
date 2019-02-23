// pages/order/order.js
import { Cart } from '../cart/cart-model';
import { Address } from '../../util/address';

const cart = new Cart();
const address = new Address();


Page({


  data: {

  },

  
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
  
        this.loadData(options);

  },

  //加载页面数据
  loadData:function(data) {
    let productArr = cart.getCartDataFromLocal(true);
    
    this.setData({
      account:data.account,
      productArr:productArr,
      orderStatus:0
    })
  },

  //用户添加地址
  editAddress:function() {
      let that = this;
      wx.chooseAddress({
        success:function(res) {
    
            let addressInfo = {
              name:res.userName,
              mobile:res.telNumber,
              totalDetail:address.setAddressInfo(res)

            }

            that.bindAddressInfo(addressInfo);
            address.submitAddress(res,(flag) => {
              if(!flag) {
                that.showTips('操作提示','地址信息更新失败',flag);

              }
            });
        }
      })
  },

  //邦定用户地址信息
  bindAddressInfo:function(addressInfo) {
      this.setData({
        addressInfo:addressInfo
      })
  },

  //消息提示
  showTips:function(title,content,flag) {
    wx.showModel({
      title:title,
      content:content,
      showCancel:false,
      success:function(res) {
        if(flag) {
          wx.switchTab({
            url:'/pages/my/my'
          }) 
        }
      }
    })
  },



  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },

  
  //生命周期函数--监听页面显示
  onShow: function () {

  },

  
})