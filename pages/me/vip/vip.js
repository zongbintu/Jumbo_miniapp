import request from "../../../utils/request";
import filter from "../../../utils/filter";
// pages/me/vip/vip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isEmpty: true,
    recode: [],
    // 会员卡类型。1：储值类型；2：次卡类型；3：期限类型
    type: ['会员卡', '储值卡', '次卡', '期限卡']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    filter.identity();
    let that = this;
    // 获取用户信息
    wx.getStorage({
      key: 'userInfo',
      success: (result) => {
        // console.log(result);
        that.setData({
          userInfo: result.data
        })
        // 请求会员卡
        request.send({
          url: '/getVipInfo/' + that.data.userInfo.id,
          data: {},
          success: res => {
            let empty = false;
            if (res.data.recode.length == 0) {
              empty = true;
            }
            that.setData({
              recode: res.data.recode,
              isEmpty: empty
            });
          }
        });
      }
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