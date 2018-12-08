import {
    config
} from '../config.js'

class HTTP {
    constructor() {
        this.baseRestUrl = config.api_blink_url
    }

    request({
        url,
        data,
        method
    }) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method)
        })
    }

    _request(url, resolve, reject, data, method) {
        wx.request({
            url: this.baseRestUrl + url,
            data: data,
            header: {
                'content-type': 'application/json',
            },
            method: method ? method : 'POST',
            dataType: 'json',
            success: (res) => {
                resolve(res.data)
            },
            fail: function(res) {
                reject()
            },
        })
    }
}

export { HTTP };