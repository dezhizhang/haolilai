// pages/home/home.js

import { Home } from 'home-model';

const home = new Home();


Page({

 //页面初始数据
  data: {
    bannerArr:['1','2','3'],
    themeArr:['1','2','9'],
    productArr:[]
  },

  //页面初始化时
  onLoad:function(){

    this.loadData();

  },
  loadData:function(){
    let id = 1;

    home.getBannerData(id, (res) => {
      console.log(res);
      
    });

    home.getProductData(id,(res) => {
      console.log(res);
     

    })
  
  },



 

  
})