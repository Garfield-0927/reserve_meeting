const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    detail:{},
    hasRegisted: false,
    weixinOpenId:"hello"
  },


  regist:function(){
    let that = this;
    wx.navigateTo({
      url: "/pages/regist/regist?id="+that.data.id,
    });
  },

  cancelMeeting(){
    let data = {
      weixinOpenId:this.data.weixinOpenId,
      confId:this.data.id
    };

    let url = "miniapp/mine/cancelReserve";

    app.wxRequest('POST', url, data, 
    (res)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    let url="miniapp/conference/getMainConf"
    let data={
      id:this.data.id,
      weixinOpenId:"1"
    }
    let that = this;
    app.wxRequest('POST',url,data,
    (res)=>{
      that.setData({
        detail:res.data.data.conferenceInfo,
        hasRegisted:res.data.data.isRegistered
      });
    },
    (err)=>{
      console.log(err);
    })
  },




})