// pages/cart/cart.js
import { Cart } from 'cart-model';
const cart = new Cart();

Page({


  data: {

  },

  
  //生命周期函数--监听页面加载
  onLoad: function (options) {

  },

  
  //生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },


  // 生命周期函数--监听页面显示
  onShow: function () {
    let cartData = cart.getCartDataFromLocal();
    let countsInfo = cart.getCartTotalCounts(true);
    let totalPrice = this.totalAccountAndCounts(cartData);
    
    this.setData({
      selectedCounts:totalPrice.selectedCounts,
      slectedTypeCounts:totalPrice.slectedTypeCounts,
      account:totalPrice.account,
      cartData:cartData,
      totalPrice:totalPrice,
     
    })

  },

  //计算订单的所有金额
  totalAccountAndCounts:function(data) {
      let account = 0; //所算所有总算价格
      let selectedCounts = 0  //购买商品的总个数
      let slectedTypeCounts = 0;   //购买商品的总类

      let multiple = 100;
      data.map((item,index) => {
        if(item.selectStatus) {
          account += item.counts * multiple * Number(item.price) * multiple;
          selectedCounts += item.counts;
          slectedTypeCounts++
        }
      })

      return {
        account:account / (multiple * multiple),
        selectedCounts,
        slectedTypeCounts
      }
  },

  //改变复选框的状态
  toggleSelect:function(ev) {
     
    let dataset = ev.currentTarget.dataset;
    
    let id = dataset.id;
    let status = dataset.status;
    let index = this.getProductIndexById(id);
    this.data.cartData[index].selectStatus = !status;
    this.resetCartData();



  },

  //用户全选时
  toggleSelectAll:function(ev) {
    console.log(ev);

  },

  //获取商品id 商品所在下标
  getProductIndexById:function(id) {

    let data = this.data.cartData;
    let len = data.length;

    for(let i=0;i<len;i++) {
      if(data[i].product_id == id) {
        return i
      }
    }
  },

  //重新计算商品的价格
  resetCartData:function() {
    let newData = this.totalAccountAndCounts(this.data.cartData);

    this.setData({
      account:newData.account,
      selectedCounts:newData.selectedCounts,
      slectedTypeCounts:newData.slectedTypeCounts,
      cartData:this.data.cartData
    })

  },
  //用户提交下单
  submitOrder:function(ev) {
    wx.navigateTo({
      url:'../order/order?account=' + this.data.account + '&form=cart'
    })
  }
})