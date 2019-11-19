// pages/appointment/appointment.js
/**
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *例子：
 *(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 一周日期
    dates: [],
    // 当前选择的日期
    currentSelect: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取课程类型
    let type = options.type;
    if (type === "0") {
      wx.setNavigationBarTitle({
        title: '私教课'
      });
    } else {
      wx.setNavigationBarTitle({
        title: '团体课'
      });
    }
    // 计算日期
    this.initDate(this);
    
  },

  /**
   * 计算一周日期
   */
  initDate: (that) => {
    let now = new Date();
    let arr = [];
    let weekDays = ['一', '二', '三', '四', '五', '六', '日'];
    for (let i = 0; i < 7; ++i) {
      let tempTime = new Date();
      tempTime.setDate(now.getDate() + i);
      // 周几
      let day = tempTime.getDay();
      // 日期
      let date = tempTime.getDate();
      arr.push({
        top: weekDays[day],
        bottom: date,
        date: tempTime.format("yyyy-MM-dd")
      })
    }
    that.setData({
      currentSelect: now.getDate(),
      dates: arr
    });
  },

  /**
   * 切换日期
   */
  changDate: function(e) {
    this.setData({
      currentSelect: e.currentTarget.dataset.date
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