import axios from "axios"

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params: {
        api_key: 'd4a32541b3613ee324d65bfff34b8241',
        language:'pt-br',
        page: 1

     }
})

export default api