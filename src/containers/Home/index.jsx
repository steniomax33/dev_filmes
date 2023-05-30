import api from '../../services/api'
import { Background } from './styles'
import { useState } from 'react'

function Home() {
    const [movie, setMovie] = useState()

    async function getMovies() {
        const data = await api.get('/movie/popular')

        setMovie(data.data.results[1])
        console.log(movie)
    }

    getMovies()

    return (
        <>
            {movie && (
                <Background img="https://image.tmdb.org/t/p/original/2klQ1z1fcHGgQPevbEQdkCnzyuS.jpg">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </Background>
            )}
        </>
    )
}

export default Home