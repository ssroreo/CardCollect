const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
      title: '索引列表',
      img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
      url: '../index/index'
    },
    {
      title: '微动画',
      img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
      url: '../index/index'
    }
    ]
  },
  toChild(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },

});