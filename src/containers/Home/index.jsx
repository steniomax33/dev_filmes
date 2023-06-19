import { useState, useEffect } from 'react'


import api from '../../services/api'
import { Background, Container, Info, ContainerButtons, Poster } from './styles'
import Button from '../../components/Button'
import Slider from '../../components/slider'
import { getImages } from '../../utils/getImages'

function Home() {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }
            } = await api.get('/movie/popular')

            setMovie(results[0])
        }

        async function getTopMovies() {
            const {
                data: { results }
            } = await api.get('/movie/top_rated')
            console.log(results)
            setTopMovies(results)
        }

        async function getTopSeries() {
            const {
                data: { results }
            } = await api.get('/tv/top_rated')
            console.log(results)
            setTopSeries(results)
        }

        async function getPopularSeries() {
            const {
                data: { results }
            } = await api.get('/tv/popular')
            console.log(results)
            setPopularSeries(results)
        }

        async function getPopularSeries() {
            const {
                data: { results }
            } = await api.get('/tv/popular')
            console.log(results)
            setPopularSeries(results)
        }

        async function getTopPeople() {
            const {
                data: { results }
            } = await api.get('/person/popular')
            console.log('top artistas' + results)
            setTopPeople(results)
        }


        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopPeople()
    }, [])

    return (
        <>
            {movie && (
                <Background
                    img={getImages(movie.backdrop_path)}
                >
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true}>Assista Agora</Button>
                                <Button red={false}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)}
                                 alt="capa-do-filme"
                            />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
        </>
    )
}

export default Home