// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "18896807726",
    password: "12345678"
  },

  // 忘记密码
  forgetPwd: function() {
    wx.showToast({
      title: '请使用微信登录',
      icon: 'none',
      duration: 1500,
      mask: true
    });
          
  },

  login: () => {
    // 打开首页
    wx.switchTab({
      url: '../home/home'
    });
  },

  // 成功获取用户信息
  onGotUserInfo: function (e) {
    console.log(e.detail)
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    wx.login({
      timeout:10000,
      success: (result) => {
        console.log(result);
        wx.hideLoading();
        // 打开首页
        wx.switchTab({
          url: '../home/home'
        });
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  // 微信登录
  wechatLogin: () => {
    wx.showLoading({
      title: "请等待",
      mask: true
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