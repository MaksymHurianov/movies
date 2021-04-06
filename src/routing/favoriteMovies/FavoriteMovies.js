import Movies from "../../components/movies/Movies";
import React, {useEffect} from "react";
import {getGenres} from "../../api/movies.api";
import s from './favoriteMovies.module.css'


function FavoriteMovies({favoriteMovie,setFavoriteMovie, movies, genres, setGenres}){

    useEffect(()=>{
        getGenres().then((data)=>{
            setGenres(data.data.genres)
        })
    },[])

    if(favoriteMovie.length === 0){
        return <div className={s.emptyField}><p>Список пуст</p></div>
    }

    return(
        <>
            <h2 className={s.favoriteMovies}>Favorite movies</h2>
        <div>{
            <Movies movies={favoriteMovie} genres={genres} favoriteMovie={favoriteMovie} setFavoriteMovie={setFavoriteMovie}/>

        }</div>
            </>
    )
}
export default FavoriteMovies