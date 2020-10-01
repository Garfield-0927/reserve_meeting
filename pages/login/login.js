// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    
    wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout:10000,
      success: (res)=>{
        console.log(res);
        let userinfo = res.userInfo;
        wx.setStorageSync("userinfo", userinfo);
        wx.navigateBack({
          delta: 1
        });
        setTimeout(function () {
          wx.hideLoading()
        }, 2000);
      },
      fail: (err)=>{
        console.log(err);
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
      },
    });
  },
})