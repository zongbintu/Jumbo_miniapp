import filter from "../../utils/filter";
import request from "../../utils/request";

// pages/venue/venue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stores: [
      {
        title: "静波瑜伽太阳城店",
        imgUrl: ["http://cnd.wgj360.com/Admin/Pic/2019/07/02/201907021136372324.png"]
      },
      {
        title: "静波瑜伽河西CBD店",
        imgUrl: ["http://cnd.wgj360.com/Admin/Pic/2019/07/02/201907021140120624.png"]
      },
      {
        title: "静波瑜伽河定桥店",
        imgUrl: ["http://cnd.wgj360.com/Admin/Pic/2019/07/02/201907021138032519.png"]
      },
      {
        title: "静波瑜伽新街口店",
        imgUrl: ["http://cnd.wgj360.com/Admin/Pic/2019/07/02/201907021138334648.png"]
      },
      {
        title: "静波瑜伽金盛路店",
        imgUrl: ["http://cnd.wgj360.com/Admin/Pic/2019/07/02/201907021139056562.png"]
      },
      {
        title: "静波瑜伽山西路店",
        imgUrl: ["http://cnd.wgj360.com/Admin/Pic/2019/07/02/201907021139326181.png"]
      },
      {
        title: "静波瑜伽宝华山静修中心",
        imgUrl: ["http://cnd.wgj360.com/Admin/Pic/2019/07/02/201907021140547275.png"]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    filter.identity();
    let that = this;
    // 请求门店
    request.send({
      url: '/shops',
      data: {},
      success: res => {
        that.setData({
          stores: res.data.shops
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