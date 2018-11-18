import { config } from '/config.js'
class HTTP {
    request (params) {
        wx.request({
            url: config.api_blink_url + params.url,
            data: params.data,
            header: {
                'content-type': 'application/json',
            },
            method: params.method ? params.method : 'POST',
            dataType: 'json',
            success: function(res) {

            },
            fail: function(res) {
                
            },
        })
    }
}