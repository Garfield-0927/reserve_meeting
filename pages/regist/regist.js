// pages/regist/regist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    mail:"",
    gender:""
  },

  getName(e){
    this.setData({
      name:e.detail.value
    })
  },

  getMail(e){
    this.setData({
      mail:e.detail.value
    })
  },

  getGender(e){
    this.setData({
      gender:e.detail.value
    })
  },

  submit(){
    let data={
      name:this.data.name,
      mail:this.data.mail,
      gender:this.data.gender
    };
    if(!data.name||!data.mail)
    {
      if(!data.name&&!data.name)
      {
        wx.showToast({
          title: '填写名字以及邮箱',
          icon: 'none',
          duration: 1500,
          mask: false,
        });
      }
      else if(!data.name)
      {
        wx.showToast({
          title: '填写名字',
          icon: 'none',
          duration: 1500,
          mask: false,
        });
      }
      else
      {
        wx.showToast({
          title: '填写邮箱',
          icon: 'none',
          duration: 1500,
          mask: false,
        });
      }
    }
    else
    {
      // 发送post请求
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


})