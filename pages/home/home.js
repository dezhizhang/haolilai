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

    home.getBannerData(id, (res) => {
      if(res.code==200 && res.success==true) {
        this.setData({
          bannerArr:res.data
        })
      }
      
    });

    home.getProductData(id,(res) => {
      if(res.code ==200 && res.success==true) {
        console.log(res);
        
        this.setData({
          themeArr:res.data
        })
      }
    
    })
  
  },



 

  
})