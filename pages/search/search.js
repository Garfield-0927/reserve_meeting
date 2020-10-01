const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isMine: 0,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  searchHandler(e){
    const that = this;
    let url ='miniapp/conference/getLikeConf'
    let name = e.detail.value;
    let data ={
      isMine: this.data.isMine,
      name: name,
      weixinOpenId: app.globalData.openid
    };
    app.wxRequest('POST', url, data,
    (res) => {
      console.log(res);
      if(!res.data.data.list.length)
      {
        wx.showToast({
          title: 'Not Found',
          icon: 'none',
          duration: 2000
        })
        return;
      }
      else
      {
        let list = res.data.data.list;
        that.setData({
          list: list
        })
      }
      
    },
    (err) =>{
      console.log(err);
    })
  }

  
})