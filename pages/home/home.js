// pages/home/home.js

import { Home } from 'home-model';

const home = new Home();


Page({

 //页面初始数据
  data: {

  },

  //页面初始化时
  onLoad:function(){

    this.loadData();

  },
  loadData:function(){
    let id = 1;

    let data = home.getBannerData(id);

  }


  
})