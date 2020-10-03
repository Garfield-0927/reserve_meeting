// pages/userinfo/userinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow: function(){
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({userinfo})
  },


  getInfoHandler(){
    wx.navigateTo({
      url: '/pages/login/login',
    });
  },

  getRegisted(){
    wx.navigateTo({
      url: '/pages/registInfo/registInfo',
    });
  }

  
})