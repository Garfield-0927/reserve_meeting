const app =  getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    confId:"",
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
      let url = "miniapp/options/commitOptions";
      let data2 = {
        confId:this.data.confId,
        weixinOpenId:"1",
        options:[
        {
          name:"name",
          value:this.data.name
        },
        {
          name:"mail",
          value:this.data.mail
        }
        ]
      };

      app.wxRequest('POST', url, data2, 
      (res)=>{
        wx.showToast({
          title: 'success',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
        });
      },
      (err)=>{
        wx.showToast({
          title: 'fail',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
        });
        console.log(err);
      })
      wx.navigateBack({
        delta: 1
      });
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
  },


})