// pages/category/category.js

import { Categofry } from 'category-model';

const categofry = new Categofry();

Page({

  
  data: {
    categoryArr:[],
    categoryProductArr:[]
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
    });

    let id = 1;
    categofry.getCategoryProduct(id,(res) => {
      if(res.code == 200 && res.success == true) {

        this.setData({
          categoryProductArr:res.data
        })
      }
    })

  },
  handelCategoryItem:function(ev) {
   
    let id = ev.currentTarget.dataset.id;
   
    categofry.getCategoryProduct(id,(res) => {
    

      if(res.code == 200 && res.success == true) {
        this.setData({
          categoryProductArr:res.data
        })
      }

    })

  }

})