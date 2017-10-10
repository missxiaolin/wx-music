// pages/cs/cs.js
var util = require('../../utils/util.js')

Page({
  data: {
    token: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    util.http('http://www.missxiaolin.com/api/qi-niu/storage-tokens', this.token)
  },
  token: function (data) {
    var tokens = data['items'][0];
    console.log(tokens)
    this.setData({
      token: tokens
    })
  },
  chooseImageTap: function () {
    var _this = this;
    //上传图片
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var filePath = res.tempFilePaths[0];
        //上传开始
        wx.uploadFile({
          url: 'https://upload.qbox.me',
          filePath: filePath,
          name: 'file',
          formData: {
            'key': filePath.split('//')[1],
            'token': _this.data.token
          },
          success: function (res) {
            console.log(res)
            // var data = JSON.parse(res.data);

            // self.setData({
            //   imageUrl: `https://xxx.qnssl.com/${data.key}`
            // })
            //do something
          },
          fail(error) {
            console.log(error)
          },
          complete(res) {
            console.log(res)
          }
        })

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

    // wx.showActionSheet({
    //   itemList: ['从相册中选择', '拍照'],
    //   itemColor: "#f7982a",
    //   success: function (res) {
    //     console.log(res);
    //     if (!res.cancel) {
    //       if (res.tapIndex == 0) {
    //         _this.chooseWxImage('album')
    //       } else if (res.tapIndex == 1) {
    //         _this.chooseWxImage('camera')
    //       }
    //     }
    //   }
    // })

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})