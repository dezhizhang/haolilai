// pages/order/order.js
import { Cart } from '../cart/cart-model';
import { Address } from '../../util/address';
import { Order } from './order-model';


const cart = new Cart();
const address = new Address();
const order = new Order();



Page({


  data: {
    data:-1
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
    wx.showModal({
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


  //用户支付
  userPay:function() {
      if(!this.data.addressInfo) {
        this.showTips('下单提示','请填写您的收货地址');
        return;

      }

      if(this.data.orderStatus == 0) {
        this.firstTimePay();

      } else {
        this.oneMoresTimePay();

      }

  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },

  firstTimePay:function() {
     let orderInfo = [];
     let productInfo = this.data.productArr;
     let order = new Order();

    
     for(let i=0;i<productInfo.length;i++) {
       orderInfo.push({
          product_id:productInfo[i].product_id,
          count:productInfo[i].counts
       })
     }

     let that = this;

     order.doOrder(orderInfo,(data) => {
      

       if(data.pass) {
         let id = data.order_id;
         that.data.id = id;
        //  that.data.formCartFlag = false;
         
         //开始支付
         that.execPay(id);

       } else {
         that.orderFail(data);

       }
     })

  },

  //生命周期函数--监听页面显示
  onShow: function () {

  },

  
})