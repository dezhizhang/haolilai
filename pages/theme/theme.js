// pages/theme/theme.js
import { Theme } from 'theme-model';

const theme = new Theme();


Page({

 
  data: {
    name:'',
    id:'',
    themeArr:[]
  },

  
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    let name = options.name;
    let id = options.id;
    this.setData({
      name:name,
      id:id
    })

    this.loadData(id,name);


  },

  //加载数据
  loadData:function(id,name) {
    theme.getProductData(id,name,(res) => {
       this.setData({
         themeArr:res.data
       })
    });



  },


  
})