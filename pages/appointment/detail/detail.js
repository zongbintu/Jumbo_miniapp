let WxParse = require('../../../utils/wxParse/wxParse.js');
import request from "../../../utils/request";

Page({
  data: {
    isLike: true,
    // banner
    imgUrls: [
      "http://cnd.wgj360.com/Admin/Pic/2019/07/08/201907081652485394.jpg",
      "http://cnd.wgj360.com/Admin/Pic/2019/07/08/201907081652599416.png",
      "http://cnd.wgj360.com/Admin/Pic/2019/06/24/201906241357583829.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/06/24/201906241353352685.jpg",
      "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/06/24/201906241354109285.jpg",
      "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/06/24/201906241354468188.jpg"
    ],
    // 商品信息
    product: {
      "id": 6,
      "deptId": "6",
      "courseName": "静波优享课程",
      "price": 123,
      "courseDetail": "静波瑜伽学院是一家集瑜伽锻炼、教练培训为一体的瑜伽专业研习品牌。地理位置优越，环境静谧素雅，公司提供专业、贴心的学习场所，并设有高端环保的瑜伽设施。",
      "courseType": "2",
      "lessonPeriod": null,
      "costPrice": 121,
      "startTime": null,
      image: "http://m.yoga00001.com/images/bxymn1.png"
    }
  },
  onLoad: function (options) {
    let that = this;

    let courseId = options.courseId;
    if (courseId === null || courseId === undefined) {
      courseId = 8;
    }

    // 请求商品详情
    request.send({
      url: '/getCourseDetail/' + courseId,
      data: {},
      success: res => {
        if (res.data.code === 0) {
          if (res.data.course.image === null || res.data.course.image === undefined) {
            // TODO 假图片
            res.data.course.image="http://m.yoga00001.com/images/bxymn1.png"
          }
          that.setData({
            product: res.data.course
          });
          WxParse.wxParse('article', 'html', res.data.course.courseDetail, that, 5);   // 实例化对象
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
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: [this.data.product.image] // 需要预览的图片http链接列表  
    })
  },
  /**
   * 进行约课
   */
  goAppointment(event) {
    let courseId = event.currentTarget.dataset.id;
    let memberId = 9;
    // 发送请求
    request.send({
      url: '/submitAppointment',
      data: {
        courseId,
        memberId
      },
      success: res => {
        if (res.data.code === 0) {
          wx.showToast({
            title: res.data.msg
          });
        } else {
          wx.showToast({
            title: '请稍后重试',
            icon: 'none'
          });
        }
      }
    });
  },
  // 回到主页
  gotoHome() {
    wx.switchTab({
      url: '../home/home'
    });
      
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
})
