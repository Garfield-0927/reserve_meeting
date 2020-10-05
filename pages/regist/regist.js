const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [],
    info: []
  },



  getInfo(name) {
    console.log(name);
    let info = {
      name: name.target.dataset.string,
      value: name.detail.value
    };

    for(let i=0; i<this.data.info.length; i++)
    {
      if(this.data.info[i].name == info.name)
      {
        this.data.info[i].value = info.value;
        return;
      }
    }
    this.data.info.push(info);
  },

  submit() {
    const that = this;
    const info = this.data.info;
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
    let url = "miniapp/options/commitOptions";
    app.wxRequest('POST', url, info,
      (res) => {
        wx.showToast({
          title: 'success',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
        });
      },
      (err) => {
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
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = "miniapp/options/getOptions";
    let data = {
      id: options.id,
      weixinOpenId: 1
    };

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