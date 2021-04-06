import axios from 'axios'

const apiKey = '0e6fea2ba74daf0a5ff29c95f9480154'
const url = 'https://api.themoviedb.org/3'
const popularMovies = `${url}/movie/popular`
const searchMovie = `${url}/search/movie`
const genres = `${url}/genre/movie/list`
// const movieDetails = `${url}/movie/${id}`
const movieUrl = `${url}/movie`





export const fetchMovies =  (page) => {
    return axios.get(popularMovies, {
        params: {
            api_key: apiKey,
            language: 'en_US',
            page: page
        }
    })
}
export const getSearchMovies =  (page, query) => {
    return axios.get(searchMovie, {
        params: {
            api_key: apiKey,
            language: 'en_US',
            page: page,
            query: query
        }
    })
}
export const getGenres = () => {
    return axios.get(genres, {
        params: {
            api_key: apiKey,
            language: 'en_US',
        }
    })
}
export const getMovieDetails = (id) => {
    return axios.get(`${movieUrl}/${id}`, {
        params: {
            api_key: apiKey,
            language: 'en_US',
        }
    })
}
export const getRecommendationMovie = (id) => {
    return axios.get(`${movieUrl}/${id}/recommendations`,{
        params: {
            api_key: apiKey,
            language: 'en_US',
        }
    })
}


