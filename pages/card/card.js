//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    location:"扬州市邗江区望月路441号",
    phone_num: "0514-87995558"
  },

  //查看会员卡详情
  bindCardTap: function () {
    wx.navigateTo({
      url: 'detail/detail'
    })
  },

  //打开店铺的位置
  bindLocationTap: function () {
    wx.openLocation({
      latitude: 32.3850300000, // 纬度，范围为-90~90，负数表示南纬
      longitude: 119.3878300000, // 经度，范围为-180~180，负数表示西经
      scale: 15, // 比较合适的缩放比例          
    })
  },

  //拨打电话
  bindTelTap: function (event) {
    wx.makePhoneCall({
      phoneNumber: this.data.phone_num //仅为示例，并非真实的电话号码
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
