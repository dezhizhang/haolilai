// pages/my/my.js
import { My } from './my-model';
const my = new My();

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

  },

  //获取用户数据
  loadData:function() {
     my.getUserInfo((data) => {
        this.setData({
          userInfo:data
        })
     })
  }

  
})