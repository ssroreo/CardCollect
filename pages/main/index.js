const app = getApp();
var gItems = [];
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: []
  },
  toChild(e) {
    wx.setStorage({
      key: 'bagid',
      data: e.currentTarget.dataset.id,
    });
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },

  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://pokerin.top/cardcollect_server/ShowCard',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var counts = res.data.baginfo.length;
        for(var i=0;i<counts;i++){
          gItems[i] = res.data.baginfo[i];
          that.setData({
            list:gItems
          });
        }
      }
    });
  },

});