import {
    HTTP
} from '../utils/http.js'

class MovieModel extends HTTP {
    constructor() {
        super()
    }

    getDetail(movieId, success) {
        var params = {
            url: "/v2/movie/subject/" + movieId,
            success: success
        }
        this.request(params)
    }
}