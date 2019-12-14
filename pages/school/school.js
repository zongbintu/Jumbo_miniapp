// pages/school/school.js
import filter from "../../utils/filter";
let WxParse = require('../../utils/wxParse/wxParse.js');

// let article = '<div>我是HTML代码</div>';
/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/
let that = this;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906281445369748.jpg",
      "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906281445446125.jpg",
      "http://cnd.wgj360.com/Admin/Pic/2019/06/28/201906281445520353.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    filter.identity();
    let that = this;
    let article = '<p style=&quot;text-align: justify; line-height: 1.75em;&quot;><span style=&quot;font-size: 16px;&quot;><strong><span style=&quot;color: rgb(49, 133, 155);&quot;>静波瑜伽学院</span></strong></span><span style=&quot;font-size: 14px;&quot;>是一家集瑜伽锻炼、教练培训为一体的瑜伽专业研习品牌。地理位置优越，环境静谧素雅，公司提供专业、贴心的学习场所，并设有高端环保的瑜伽设施。</span></p><p style=&quot;text-align: justify; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>通过优质的服务，丰富的课程体系，专业的教学和高品质的环境，指引瑜伽学员从零基础开始学习瑜伽，正确入门，并获得一种纯净，健康，快乐的信念经历生命的过程,身心灵共修。十几年沉淀，静波瑜伽以专业的教学与课程服务赢得了广大瑜伽爱好者的信赖！</span></p><p><br/></p>';

    WxParse.wxParse('article', 'html', article, that, 5);   // 实例化对象

    let article2 = '<p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>很多人都说</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>遇见瑜伽师一辈子最幸福的事情</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>若在你年年轻的时候遇见瑜伽</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>那是上天对你的祝福</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>若在年老时遇见瑜伽</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>则是上天的眷顾</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>静波瑜伽感恩遇见你们</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>相信你们都能在今后的瑜伽路上</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>遇见更健康、更美丽、更自信的自己</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>也坚信</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>坚持你的练习，一切收益随之而来</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>静波瑜伽</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>传瑜伽之道</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>授瑜伽之业</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>解人生之惑</span></p><p style=&quot;text-align: center; line-height: 1.75em;&quot;><span style=&quot;font-size: 14px;&quot;>你们的瑜伽之路开始正式启航啦！</span></p><p><br/></p>';

    WxParse.wxParse('article2', 'html', article2, that, 5);   // 实例化对象

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