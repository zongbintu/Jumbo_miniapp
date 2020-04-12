// pages/me/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    babyBirth: '',
    showDatePicker: false,
    currentDate: new Date().getTime(),
    minDate: new Date(0).getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  showDataPick: function() {
    this.setData({
      showDatePicker: true
    })
  },

  onClose: function() {
    this.setData({
      showDatePicker: false
    })
  },

  selectedDate: function(value) {
    this.setData({
      babyBirth: new Date(value.detail).format("yyyy-MM-dd"),
      showDatePicker: false
    })
  },

  cancelSelect: function() {
    this.setData({
      showDatePicker: false
    })
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