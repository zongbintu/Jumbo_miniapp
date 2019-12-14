import filter from "../../utils/filter";
// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 0：全部 1：待发货  2：待收货 3：待评价  
    active: 0,
    // 商品列表数据
    orders: [
      {
        id: 1,
        price: 316,
        list: [{
          id: 1,
          title: '园艺大师抗皱精华露',
          image: 'https://avatars1.githubusercontent.com/u/10238070?s=460&v=4',
          pro_name: "30ml",
          num: 1,
          price: 180
        },
        {
          id: 2,
          title: '伊芙琳玫瑰护手霜',
          image: 'https://avatars0.githubusercontent.com/u/17978187?s=88&v=4',
          pro_name: "25g",
          num: 1,
          price: 62
        },
        {
          id: 2,
          title: '燕麦山羊乳舒缓护手霜',
          image: 'https://avatars1.githubusercontent.com/u/29934643?s=88&v=4',
          pro_name: "75ml",
          num: 1,
          price: 175
        }]
      },
      {
        id: 2,
        price: 180,
        list: [{
          id: 1,
          title: '园艺大师抗皱精华露',
          image: 'https://avatars1.githubusercontent.com/u/10238070?s=460&v=4',
          pro_name: "30ml",
          num: 1,
          price: 180
        }]
      },
      {
        id: 3,
        price: 62,
        list: [{
          id: 2,
          title: '伊芙琳玫瑰护手霜',
          image: 'https://avatars0.githubusercontent.com/u/17978187?s=88&v=4',
          pro_name: "25g",
          num: 1,
          price: 62
        }]
      },
      {
        id: 4,
        price: 175,
        list: [{
          id: 2,
          title: '燕麦山羊乳舒缓护手霜',
          image: 'https://avatars1.githubusercontent.com/u/29934643?s=88&v=4',
          pro_name: "75ml",
          num: 1,
          price: 175
        }]
      }
    ]    
  },

  // 查看订单详情
  gotoDetail(e) {
    wx.navigateTo({
      url: '/pages/order/order_detail/order_detail?orderId=' + e.target.dataset.orderId
    });
  },

  onChange(event) {
    console.log(event.detail);
    wx.showToast({
      title: `切换到标签 ${event.detail.title}`,
      icon: 'none'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    filter.identity();
    let type = options.type;
    if (type === null || type === undefined) {
      type = 0;
    }
    this.setData({
      active: type
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