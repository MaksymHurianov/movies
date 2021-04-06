import FollowUnfollow from "../followUnfollow/ButtonFollowUnfollow";
import React from "react";
import {useHistory} from "react-router";
import s from './movies.module.css'
import basePhoto from '../../assets/noPhoto.png'

function Movies({movies, genres, favoriteMovie, setFavoriteMovie}) {

    const history = useHistory()

    function getDetails(id) {
        history.push(`/movie/${id}`)
    }



    function matchGenre(movie) {
        const arr = []
        if (movie.genres) {
            for (let i = 0; i < movie.genres.length; i++) {
                arr.push(movie.genres[i].name)
            }
            return arr
        } else {
            for (let i = 0; i < movie.genre_ids.length; i++) {

                genres.find(genre => {
                    if (genre.id === movie.genre_ids[i]) {
                        arr.push(genre.name)
                    }
                })
            }
            return arr
        }
    }

    return (<div className={s.wrapper} >
            {movies.map(movie => {

                return <div key={movie.id} className={s.movieContainer}>
                    <h3 className={s.movieTitle}>{movie.title}</h3>
                    <div className={s.scale}><img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : basePhoto }
                                                  onClick={() => getDetails(movie.id)}/></div>
                    <FollowUnfollow favoriteMovie={favoriteMovie} setFavoriteMovie={setFavoriteMovie} movie={movie}/>
                    <div className={s.span}>{matchGenre(movie).map((i, index) => <span key={index} className={s.genre}>{i}</span>)}</div>
                </div>

            })}
        </div>
    )
}

export default Movies