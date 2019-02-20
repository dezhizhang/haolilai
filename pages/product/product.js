// pages/product/product.js
import { Product } from 'product-model';
import { Cart } from '../cart/cart-model';


const product = new Product();
const cart = new Cart();


Page({

  // 页面的初始数据
  data: {
    array: [1, 2, 3, 4,5,6,7,8,9,10],
    index:0,
    tabArr:[{name:"商品详情"},{name:"产品参数"},{name:'售后保障'}],
    currentTabsIndex:0,
    productArr:[]

  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    let id = options.id;

    this.loadData(id);
  },

  loadData:function(id) {
    product.getDetailInfo(id,(res) => {
      if(res.code == 200 && res.success == true) {
      
        this.setData({
          productArr:res.data,
          cartTotalCounts:cart.getCartTotalCounts(),
        })
      }

    });

  
  },

  //选择器的设置
  bindPickerChange:function(ev) {
  
    this.setData({
      index:ev.detail.value
    })
  },

  //选项卡切换
  onBindTapTabItem:function(ev) {
    let index = ev.currentTarget.dataset.index;
    this.setData({
      currentTabsIndex:index
    })

  },
  handleAddCart:function() {
    let tempObj = {};

    let keys = ['product_id','name','product_url','price'];
    let data = this.data.productArr;

   
    data.map((item,index) => {
     
      if(item) {
        tempObj = {
          product_id:item.product_id,
          name:item.product_id,
          product_url:item.product_url,
          price:item.price
        }
      }

    });

    let counts =parseInt(this.data.index) + 1;
   
    cart.add(tempObj,counts);

  }

 
})