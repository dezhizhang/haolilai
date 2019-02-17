// pages/product/product.js
import { Product } from 'product-model';

const product = new Product();

Page({

  
  // 页面的初始数据
  data: {

  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    let id = options.id;

    this.loadData(id);



  },

  loadData:function(id) {
    product.getDetailInfo(id);
    
  }

 
})