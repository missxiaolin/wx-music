import {
    HTTP
} from '../utils/http.js'

class MovieModel extends HTTP {
    constructor() {
        super()
    }

    getDetail(movieId) {
        var params = {
            url: "/v2/movie/subject/" + movieId,
            data: {}

        }
        return this.request(params)
    }
}