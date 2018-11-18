import {
    config
} from '../config.js'

class HTTP {
    request(params) {
        wx.request({
            url: config.api_blink_url + params.url,
            data: params.data,
            header: {
                'content-type': 'application/json',
            },
            method: params.method ? params.method : 'POST',
            dataType: 'json',
            success: (res) => {
                let code = res.statusCode
                params.success(res)
            },
            fail: function(res) {
                params.fail(res)
            },
        })
    }
}