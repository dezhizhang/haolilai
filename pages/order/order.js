// pages/order/order.js
Page({


  data: {

  },

  
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
  
        this.loadData(options);

  },

  //加载页面数据
  loadData:function(data) {
    let productArr = [];

    this.setData({
      account:data.account
    })
  },
  

  
  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },

  
  //生命周期函数--监听页面显示
  onShow: function () {

  },

  
})