Page({
    data: {

    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        wx.login({
            success: function (res) {
                // console.log(res);
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: 'https://api.weixin.qq.com/sns/jscode2session',
                        method: 'GET',
                        data: {
                            appid:'wx0a0594530f0e3c63',
                            secret:'f2b2e2d77bd725842af81d5c7049a187',
                            js_code: res.code,
                            grant_type:'authorization_code'
                        },
                        success: function (res) {
                            console.log(res.data.openid);
                        },
                    })
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    },
    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });

        wx.switchTab({
            url: "../posts/post"
        });

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
    },
    onsave:function(){
      console.log(1)
    }
})