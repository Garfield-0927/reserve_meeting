const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    confId:0,
    weixinOpenId:0,
    options: []
  },



  getInfo(name) {
    console.log(name);
    let info = {
      name: name.target.dataset.string,
      value: name.detail.value
    };
    for(let i = 0; i < this.data.options.length; i++)
    {
      if(this.data.options[i].name == info.name)
      {
        this.data.options[i].value = info.value;
        return;
      }
    }
   
    
  },

  submit() {
    
    // if(!data.name||!data.mail)
    // {
    //   if(!data.name&&!data.name)
    //   {
    //     wx.showToast({
    //       title: '填写名字以及邮箱',
    //       icon: 'none',
    //       duration: 1500,
    //       mask: false,
    //     });
    //   }
    //   else if(!data.name)
    //   {
    //     wx.showToast({
    //       title: '填写名字',
    //       icon: 'none',
    //       duration: 1500,
    //       mask: false,
    //     });
    //   }
    //   else
    //   {
    //     wx.showToast({
    //       title: '填写邮箱',
    //       icon: 'none',
    //       duration: 1500,
    //       mask: false,
    //     });
    //   }
    // }
    // else
    // {
    //   let url = "miniapp/options/commitOptions";
    //   let data2 = {
    //     confId:this.data.confId,
    //     weixinOpenId:"1",
    //     options:[
    //     {
    //       name:"name",
    //       value:this.data.name
    //     },
    //     {
    //       name:"mail",
    //       value:this.data.mail
    //     }
    //     ]
    //   };

    // const that = this;

    // let url = "miniapp/options/commitOptions";
    const that = this;
    let data = {
      confId:that.data.confId,
      weixinOpenId:that.data.weixinOpenId,
      options:that.data.options
    };
    console.log(data);
    
    wx.request({
      url: app.globalData.baseUrl+"miniapp/options/commitOptions",
      data: {
        confId:that.data.confId,
        weixinOpenId:that.data.weixinOpenId,
        options:that.data.options
      },
      header: {'content-type':'application/json',
                'Accepted':'application/json'},
      method: 'POST',
      dataType: 'json',
      success: (res)=>{
        console.log(res);
      },
    })

  //   app.wxRequest('POST', url, data,
  //     (res) => {
  //       wx.showToast({
  //         title: 'success',
  //         icon: 'none',
  //         image: '',
  //         duration: 1500,
  //         mask: false,
  //       });
  //       console.log(res);
  //     },
  //     (err) => {
  //       wx.showToast({
  //         title: 'fail',
  //         icon: 'none',
  //         image: '',
  //         duration: 1500,
  //         mask: false,
  //       });
  //       console.log(err);
  //     })
  //   wx.navigateBack({
  //     delta: 1
  //   });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = "miniapp/options/getOptions";
    let data = {
      id: options.id,
      weixinOpenId: "1"
    };
    this.setData({
      confId:options.id,
      weixinOpenId: "1"
    })

    let that = this;
    app.wxRequest('POST', url, data,
      (res) => {
        that.setData({
          options: res.data.data.options
        })
      },
      (err) => {
        console.log(err);
      })

    this.setData({
      id: options.id
    })
  },


})