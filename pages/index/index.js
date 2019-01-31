// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      front:'front',
      back:'back',
      flip:'ee'
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