import request from "../../../utils/request";
import filter from "../../../utils/filter";

// pages/appointment/my_appointment/my_appointment_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmpty: false,
    userInfo: {},
    // 课程数据
    courses: [],
    // 1:会员预约；2:电话预约（场馆帮助预约）；3:签到；4:会员取消预约；5：电话取消预约（场馆帮助取消预约）;6:无效预约；
    status: ['未知状态', '已预约', '电话预约', '签到', '取消预约', '电话取消', '无效预约']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    filter.identity();
    let that = this;
    wx.getStorage({
      key: 'userInfo',
      success: (result) => {
        that.setData({
          userInfo: result.data
        });
        // 更新课程
        this.updateCourses();
      }
    });
  },

  /**
   * 更新课程历史信息
   */
  updateCourses() {
    let that = this;
    // 请求课程
    request.send({
      url: '/appointmentHistory',
      data: {
        memberId: that.data.userInfo.id
      },
      success: res => {
        if (res.data.code === 0) {
          that.setData({
            courses: res.data.courses
          });
          that.setData({
            isEmpty: false
          });
        } else {
          wx.showToast({
            title: '暂时没有课程',
            icon: 'none'
          });
          that.setData({
            isEmpty: true,
            courses: []
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