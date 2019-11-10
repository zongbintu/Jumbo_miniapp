// pages/customed/customed.js

let WxParse = require('../../utils/wxParse/wxParse.js');
import request from "../../utils/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;

    let articleId = options.articleId;
    if (articleId === null || articleId === undefined) {
      articleId = 1;
    }

    // 请求文章内容
    request.send({
      url: '/customPage/' + articleId,
      data: {},
      success: res => {
        if (res.data.code === 0) {
          that.setData({
            pageInfo: res.data.page
          });
          WxParse.wxParse('article', 'html', res.data.page.content, that, 5);   // 实例化对象
        } else {
          wx.showToast({
            title: '您所请求的内容不见咯~',
            icon: 'none',
            duration: 1500,
            mask: true
          });
        }
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