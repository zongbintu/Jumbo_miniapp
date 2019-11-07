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
        "imgUrl": "http://cnd.wgj360.com/Admin/Pic/2019/07/08/201907081652485394.jpg"
      },
      {
        "title": "新手柔韧提升计划",
        "imgUrl": "http://cnd.wgj360.com/Admin/Pic/2019/07/08/201907081652599416.png"
      },
      {
        "title": "新手柔韧提升计划",
        "imgUrl": "http://cnd.wgj360.com/Admin/Pic/2019/06/24/201906241357583829.jpg"
      }
    ],
    // 精品活动
    activity: [
      {
        url: '/pages/store/store',
        title: "门店场馆",
        img: "ic_house.png"
      },
      {
        url: '/pages/store/store',
        title: "热门活动",
        img: "ic_activity.jpg"
      },
      {
        url: '/pages/store/store',
        title: "视频教程",
        img: "ic_course.jpg"
      },
      {
        url: '/pages/store/store',
        title: "在线商城",
        img: "ic_shopping.jpg"
      },
      {
        url: '/pages/store/store',
        title: "学院简介",
        img: "ic_school.jpg"
      },
      {
        url: '/pages/store/store',
        title: "师资团队",
        img: "ic_teacher.jpg"
      },
      {
        url: '/pages/store/store',
        title: "零基础培训",
        img: "ic_train.jpg"
      },
      {
        url: '/pages/store/store',
        title: "联系我们",
        img: "ic_contact.jpg"
      }
    ],
    // 通知消息
    notifications: [],
    // 推荐课程 0精选热门课程；1名师进修课程；2热门推荐课程
    recommendCourse: [],
    // 精选热门课程
    hotCourses: [
      {
        img: "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/06/24/201906241353352685.jpg",
        title: '空中瑜伽教练培训',
        desc: '空中瑜伽，是力量和美的代言，身姿曼妙轻盈，在空中偏偏起舞。',
        price: 2800
      },
      {
        img: "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/06/24/201906241354109285.jpg",
        title: '基础全能班教练班',
        desc: '全能教练 特色进修',
        price: 12800
      },
      {
        img: "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/06/24/201906241354468188.jpg",
        title: '零基础全日制教练班',
        desc: '空权威认证 科学训练',
        price: 9800
      },
      {
        img: "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/06/24/201906241355205423.jpg",
        title: '零基础周末教练培训班',
        desc: '随到随学 推荐就业',
        price: 9800
      }
    ],
    // 名师进修课程
    teacherCourses: [
      {
        img: "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/07/10/201907101512111241.png",
        title: '内观流Inside Flow',
        desc: '',
        price: 2280
      },
      {
        img: "http://cnd.wgj360.com/Admin/Pic/2019/07/10/201907101525477882.png",
        title: '建慧孕产瑜伽培训认证',
        desc: '明星金牌导师',
        price: 4900
      }
    ],
    // 热门课程推荐
    recommendCourses: [
      {
        img: "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/07/08/201907081540595573.png",
        title: '纯瑜伽公开课（静波瑜伽特聘外籍老师）',
        desc: '',
        price: 49.90
      },
      {
        img: "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/07/02/201907021716298064.png",
        title: '常温瑜珈/高温瑜伽/空中瑜伽（任选1节）',
        desc: '',
        price: 49.90
      },
      {
        img: "http://cnd.wgj360.com/User/j/jingboyujia/21089/Pic/2019/07/02/201907021739338983.png",
        title: '普拉提精品器材小班',
        desc: '',
        price: 98
      }
    ],
    // 场馆
    venues: [
      "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906280914457792.png",
      "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906280915009268.png",
      "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906280915216535.png",
      "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906280915344202.png",
      "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906280941559852.png"
    ],
    // 名称/称呼
    username: '',
    // 手机/电话
    phoneNumber: '',
    // 留言内容
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;

    // 请求轮播图
    request.send({
      url: '/slideImage',
      data: {},
      success: res => {
        that.setData({
          classBanner: res.data.images
        });
      }
    });

    // 请求通知
    request.send({
      url: '/notification',
      data: {},
      success: res => {
        that.setData({
          notifications: res.data.notifications
        });
      }
    });

    // 请求推荐课程
    request.send({
      url: '/recommendCourse',
      data: {},
      success: res => {
        that.setData({
          hotCourses: [],
          teacherCourses: [],
          recommendCourses: []
        })
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        res.data.courses.forEach(e => {
          // 0精选热门课程；1名师进修课程；2热门推荐课程
          switch (e.type) {
            case 0:
                arr1.push(e);
              break;
            case 1:
                arr2.push(e);
              break;
            case 2:
                arr3.push(e);
              break;
            default:
              break;
          }
        });
        that.setData({
          recommendCourse: res.data.courses,
          hotCourses: arr1,
          teacherCourses: arr2,
          recommendCourses: arr3
        });
      }
    });

    // 请求门店
    request.send({
      url: '/shops',
      data: {},
      success: res => {
        that.setData({
          venues: res.data.shops
        });
      }
    });


    // wx.setTabBarBadge({
    //   index: 3,
    //   text: '1'
    // });
    // wx.showLoading({
    //   title: '加载中',
    // })

    // setTimeout(function () {
    //   wx.hideLoading()
    //   wx.hideNavigationBarLoading();
    // }, 2000)
    // wx.showNavigationBarLoading();
  },

  // 用户名变化
  onNameChange(e) {
    this.setData({
      username: e.detail
    })
  },

  // 手机号码变化
  onPhoneChange(e) {
    this.setData({
      phoneNumber: e.detail
    })
  },

  // 输入内容变化
  onMessageChange(e) {
    this.setData({
      message: e.detail
    })
  },

  /**
   * 提交留言
   */
  submitAppointment() {
    if (this.data.username === '') {
      wx.showToast({
        title: '请输入您的姓名',
        icon: 'none',
        duration: 1500,
        mask: true
      });
      return;
    }

    if (this.data.phoneNumber === '') {
      wx.showToast({
        title: '请输入您的联系方式',
        icon: 'none',
        duration: 1500,
        mask: true
      });
      return;
    }

    let that = this;

    // 请求轮播图
    request.send({
      url: '/submitAppointment',
      data: {
        name: that.data.username,
        phone: that.data.phoneNumber,
        message: that.data.message
      },
      success: res => {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1500,
            mask: true
          });
          return;
        }
        this.setData({
          username: '',
          phoneNumber: '',
          message: ''
        })
        wx.showToast({
          title: '预约成功',
          duration: 1500
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
