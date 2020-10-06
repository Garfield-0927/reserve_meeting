const app =  getApp();



Page({

  /**
   * 页面的初始数据
   */
  data: {
    meeting:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let url = "miniapp/mine/getRegisteredConf";
    let data = {
      weixinOpenId:1
    }
    app.wxRequest('POST', url, data, 
    (res)=>{
      that.setData({
        meeting: res.data.data.list
      })
      },
    (err)=>{
      console.log(err);
    })
  },


  ToInfo(){
    let that = this;
    wx.navigateTo({
      url: '/pages/meetingInfo/meetinInfo?id={{that.data.id}}',
    });
  }

  
})