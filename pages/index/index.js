// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
      front:'front',
      back:'back',
      flip:'ee',
      bagid:'0',
      cardnames:[]
  },

  flipTap(){
      var that = this;
      var tempFlip;
    if (that.data.flip == 'ee') tempFlip = 'ff';
    else tempFlip = 'ee';
    that.setData({
      flip:tempFlip
    });
  },

  frontTap(){
    var that = this;
    var tempFront,tempBack;
    if(that.data.front == 'front'){
      tempFront = 'back';
      tempBack = 'front';
    } 
    else {
      tempFront = 'front'
      tempBack = 'back';
    }
    that.setData({
      front:tempFront,
      back:tempBack
    });
  },

  backTap() {
    var that = this;
    var tempFront, tempBack;
    if (that.data.front == 'front') {
      tempFront = 'back';
      tempBack = 'front';
    }
    else {
      tempFront = 'front'
      tempBack = 'back';
    }
    that.setData({
      front: tempFront,
      back: tempBack
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'bagid',
      success: function(res) {
        that.setData({
          bagid:res.data
        });
        var tmpbagid = res.data;
        var tmpurl = 'http://localhost:8080/CardCollect_server_war_exploded/ShowCardInfo?bagid=' + tmpbagid;
        wx.request({
          url: tmpurl,
          method: 'GET',
          header: {
            //设置参数内容类型为json
            'content-type': 'application/json'
          },
          success: function (res) {
            that.setData({
              cardnames:res.data.cardinfo
            });
            console.log(that.data.cardnames);
          }
        });
      },
    });
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})