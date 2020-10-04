const app =  getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:[],
    info:[]
  },


  submit(){
    const that = this;
    let info = new Array();
    for(let i = 0; i<this.data.options.length; i++)
    {
      console.log(that.data.options[i].name + "hahaha");
      console.log("hehehe"+document.getElementsByName(that.data.options[i].name));
      info[i] = 
      {
        name:that.data.options[i].name,
        value:document.getElementsByName(that.data.options[i].name)
      }
      
    }
    console.log(info);
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
    let url="miniapp/options/getOptions";
    let data = {
      id:options.id,
      weixinOpenId:1
    };

    let that = this;
    app.wxRequest('POST', url, data, 
    (res)=>{
      that.setData({
        options:res.data.data.options
      })
    },
    (err)=>{
      console.log(err);
    })

    this.setData({
      id:options.id
    })
  },


})