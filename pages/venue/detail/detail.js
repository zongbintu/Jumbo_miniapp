// pages/venue/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    venue: {
      "id": "bd5cb91f-5bfb-4ae2-8235-e7e4fff599c7",
      "orderNum": 4,
      "name": "静波瑜伽【扬州高邮世贸店】",
      "status": "1",
      "type": null,
      "telephone": "15050535524",
      "provincial": null,
      "provincialName": null,
      "city": null,
      "cityName": null,
      "district": null,
      "districtName": null,
      "address": "扬州yang",
      "longitude": "",
      "dimensions": "",
      "qrCode": null,
      "venueCover": "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906280914457792.png"
    },
    indicatorDots: false, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let model = JSON.parse(options.model);
    try {
      if (model.type == 1) {
        model.type = "店铺(场馆)";
      } else if (model.type == 2) {
        model.type = "场地(教室)";
      } else {
        model.type = "其他部门";
      }
    } catch(err) {
      model.type = "其他部门";
    }
    this.setData({
      venue: model
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