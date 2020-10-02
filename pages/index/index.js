const app = getApp();

Page({
  data: {
    "list": []
  },


  // ToInfo(e){
  //   console.log(e);
  //   wx.navigateTo({
  //     url: '../meetingInfo/meetingInfo',
  //     success: (res)=>{
  //       console.log(res);
  //     },
  //     fail: (err)=>{
  //       console.log(err);
  //     },
  //   });
  // },


  onPullDownRefresh(){
    let list = []
    // 1. 重置数组
    this.setData({
      list
    });

    let url='/miniapp/conference/getNewConference';
    let data={};
    app.wxRequest('GET', url, data,
    (res) => {
      this.setData({
        list:res.data.data.list
      })
    },
    (err) =>{
      console.log(err);
    })

    setTimeout((res) => {
      wx.stopPullDownRefresh()
    }, 1000);

  },

  onLoad: function (options) {
    let url='/miniapp/conference/getNewConference';
    let data={};
    app.wxRequest('GET', url, data,
    (res) => {
      this.setData({
        list:res.data.data.list
      })
    },
    (err) =>{
      console.log(err);
    })
   },

})
