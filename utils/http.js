import {
    config
} from '../config.js'

class HTTP {
    constructor() {
        this.baseRestUrl = config.api_blink_url
        super();        
    }

    request(params) {
        wx.request({
            url: this.baseRestUrl + params.url,
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