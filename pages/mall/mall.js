let app = getApp();

import request from "../../utils/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 优选课程列表
    classBanner: [
      {
        "title": "新手柔韧提升计划",
        "imgUrl": "http://m.yoga00001.com/images/bxymn2.png"
      },
      {
        "title": "新手柔韧提升计划",
        "imgUrl": "http://m.yoga00001.com/images/bxymn5.png"
      },
      {
        "title": "新手柔韧提升计划",
        "imgUrl": "http://m.yoga00001.com/images/bxymn3.png"
      },
      {
        "title": "新手柔韧提升计划",
        "imgUrl": "http://m.yoga00001.com/images/bxymn1.png"
      }
    ],
    // 精品活动
    activity: [
      {
        url: '/pages/class/class',
        title: "Nik",
        img: "http://m.yoga00001.com/images/bxye5.png"
      },
      {
        url: '/pages/class/class',
        title: "范范Fan",
        img: "http://m.yoga00001.com/images/bxye8.png"
      },
      {
        url: '/pages/class/class',
        title: "婧婧Chris",
        img: "http://m.yoga00001.com/images/bxye9.png"
      },
      {
        url: '/pages/class/class',
        title: "安妮Ann",
        img: "http://m.yoga00001.com/images/bxye10.png"
      }
    ],
    // 推荐商品
    recommendGoods: [
      {
        url: '/pages/store/store',
        title: "门店场馆门店场馆门店场馆门店场馆",
        img: "http://m.yoga00001.com/images/bxyj1.png",
        price: "1288"
      },
      {
        url: '/pages/store/store',
        title: "热门活动",
        img: "http://m.yoga00001.com/images/bxyj2.png",
        price: "1288"
      },
      {
        url: '/pages/store/store',
        title: "视频教程",
        img: "http://m.yoga00001.com/images/bxyj3.png",
        price: "1288"
      },
      {
        url: '/pages/store/store',
        title: "在线商城",
        img: "http://m.yoga00001.com/images/bxyj4.png",
        price: "1288"
      },
      {
        url: '/pages/store/store',
        title: "学院简介",
        img: "http://m.yoga00001.com/images/bxyj5.png",
        price: "1288"
      },
      {
        url: '/pages/store/store',
        title: "师资团队",
        img: "http://m.yoga00001.com/images/bxyj6.png",
        price: "1288"
      },
      {
        url: '/pages/store/store',
        title: "零基础培训",
        img: "http://m.yoga00001.com/images/bxyj7.png",
        price: "1288"
      },
      {
        url: '/pages/store/store',
        title: "联系我们",
        img: "http://m.yoga00001.com/images/bxyj8.png",
        price: "1288"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;

    // 请求轮播图
    // request.send({
    //   url: '/slideImage',
    //   data: {},
    //   success: res => {
    //     that.setData({
    //       classBanner: res.data.images
    //     });
    //   }
    // });
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
