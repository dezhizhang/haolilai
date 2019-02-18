// pages/category/category.js

import { Categofry } from 'category-model';

const categofry = new Categofry();

Page({

  
  data: {
    categoryArr:[]
  },

  onLoad: function (options) {
     this.loadData();

  },

  loadData:function() {
    categofry.getCategoryType((res) => {
        if(res.code == 200 && res.success == true) {
          this.setData({
            categoryArr:res.data
          })
        }
    })
  }

})