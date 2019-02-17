// pages/product/product.js
import { Product } from 'product-model';

const product = new Product();

Page({

  
  // 页面的初始数据
  data: {
    array: [1, 2, 3, 4,5,6,7,8,9,10],
    index:0,
    tabArr:[{name:"商品详情"},{name:"产品参数"},{name:'售后保障'}],
    currentTabsIndex:0,
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    let id = options.id;

    this.loadData(id);



  },

  loadData:function(id) {
    product.getDetailInfo(id,(res) => {
      console.log(res);

    });

  },

  //选择器的设置
  bindPickerChange:function(ev){
    this.setData({
      index:ev.detail.value
    })
  },

  //选项卡切换
  onBindTapTabItem:function(ev){
    let index = ev.currentTarget.dataset.index;
    this.setData({
      currentTabsIndex:index
    })

  }

 
})