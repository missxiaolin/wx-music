import {
    HTTP
} from '../utils/http.js'

class Rule extends HTTP {
    constructor() {
        super()
    }

    getDetail(movieId) {
        var params = {
            url: `/applet/user/deposit/rule`,
            method: 'POST',
            data: {}

        }
        return this.request(params)
    }
}

export { Rule }