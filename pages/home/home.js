// pages/home/home.js

import { Home } from 'home-model';

const home = new Home();


Page({

 //页面初始数据
  data: {
    bannerArr:[],
    themeArr:[],
    productArr:[]
  },

  //页面初始化时
  onLoad:function(){

    this.loadData();

  },
  loadData:function(){
    let id = 1;
    //轮播图
    home.getBannerData((res) => {
      if(res.code==200 && res.success==true) {
        this.setData({
          bannerArr:res.data
        })
      }
      
    });
    //主题
    home.getThemeData((res) => {
      if(res.code ==200 && res.success==true) {
        
        this.setData({
          themeArr:res.data
        })
      }
    
    });

    //产品
    home.getProductData((res) => {
      if(res.code == 200 && res.success==true) {
        this.setData({
          productArr:res.data
        })
      }
     

    });
    

  
  },



 

  
})