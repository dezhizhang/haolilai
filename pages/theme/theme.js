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
    let id = options.id;
    this.setData({
      id:id
    })

    this.loadData(id);


  },

  //加载数据
  loadData:function(id) {
  
    theme.getProductData(id,(res) => {
       if(res.code == 200 && res.success == true) {
          this.setData({
            themeArr:res.data
          })
       }

    });



  },


  
})