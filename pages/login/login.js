import request from "../../utils/request";
// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    openId: '',
    userInfo: {},
    username: "",
    password: "",
    showGetPhoneRequest: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
    // 自动登录
    wx.getStorage({
      key: 'userInfo',
      success: (result) => {
        console.log(result);
        let userInfo = result.data;
        // 存在openId、手机号即可自动登录
        if (userInfo && userInfo.openId && userInfo.purePhoneNumber) {
          wx.switchTab({
            url: '../home/home'
          });
        }
      },
      fail: () => {
        console.log("获取userInfo失败");},
      complete: () => {
        wx.hideLoading();
      }
    });
  },

  // 忘记密码
  forgetPwd: function () {
    wx.showToast({
      title: '请使用微信登录',
      icon: 'none',
      duration: 1500,
      mask: true
    });
  },

  login: () => {
    wx.showToast({
      title: '请使用微信登录',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: true
    });

    // 打开首页
    // wx.switchTab({
    //   url: '../home/home'
    // });
  },

  // 成功获取手机号码
  getPhoneNumber(e) {
    let that = this;
    console.log(e.detail);
    console.log(e.detail.iv);
    console.log(e.detail.encryptedData);

    // 获取操作code
    wx.login({
      timeout: 10000,
      success: (result) => {
        // 进行注册
        request.send({
          url: '/register',
          data: {
            userInfo: that.data.userInfo,
            code: result.code,
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv
          },
          success: res => {
            console.log(res);
            // 注册成功
            if (res.data.code === 0) {
              // 保存用户信息
              wx.setStorage({
                key: 'userInfo',
                data: res.data.userInfo,
                success: (result) => {
                  // 打开首页
                  wx.switchTab({
                    url: '../home/home'
                  });
                },
                fail: () => {},
                complete: () => {}
              });
            }
            // 注册失败
            else {
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 1500,
                mask: true,
                success: (result) => {
                  // 关闭获取手机号码的弹窗
                  that.setData({
                    showGetPhoneRequest: false
                  });
                }
              });
            }
          }
        });
      },
      fail: () => {},
      complete: () => {}
    });
  },

  // 取消获取手机号码
  onClose() {
    this.setData({
      showGetPhoneRequest: false
    });
    wx.showToast({
      title: '你取消了登录授权，暂时无法登录',
      icon: 'none',
      duration: 1500,
      mask: true
    });
  },

  // 成功获取用户信息
  onGotUserInfo: function (e) {
    let that = this;
    console.log(e)
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
    wx.login({
      timeout: 10000,
      success: (result) => {
        console.log(result);
        wx.hideLoading();
        // 打开首页
        // wx.switchTab({
        //   url: '../home/home'
        // });
        // 登录请求
        request.send({
          url: '/wxAuthWithDecode',
          data: {
            code: result.code,
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv
          },
          success: res => {
            console.log("wxAuthWithDecode", res);
            // 登录成功
            if (res.data.code === 0) {
              // 存储用户信息
              wx.setStorage({
                key: 'userInfo',
                data: res.data.userInfo,
                success: (result) => {
                  // 打开首页
                  wx.switchTab({
                    url: '../home/home'
                  });
                }
              });
            }
            // 需要授权（注册）
            else if (res.data.code === 12) {
              console.log(res.data);
              // 存储注册用户所需的信息
              that.setData({
                userInfo: res.data.userInfo,
                showGetPhoneRequest: true,
                openId: res.data.openId
              });
            }
            // 其他错误
            else {
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 1500,
                mask: true
              });
            }
          }
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