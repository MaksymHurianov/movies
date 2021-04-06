import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getGenres, getMovieDetails, getRecommendationMovie} from "../../api/movies.api";
import FollowUnfollow from "../../components/followUnfollow/ButtonFollowUnfollow";
import Loading from "../../components/loading/Loading";
import s from './movieDetails.module.css'
import basePhoto from "../../assets/noPhoto.png";

function MovieDetail({genres, setGenres, favoriteMovie, setFavoriteMovie}){
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [recommendation, setRecommendation] = useState(null)
    useEffect(()=>{
        getGenres().then((data)=>{
            setGenres(data.data.genres)
        })
    },[])
    useEffect(()=>{
        getMovieDetails(id)
            .then(data=>{
                setMovie(data.data)
         })
        getRecommendationMovie(id)
            .then(data=>{
                setRecommendation(data.data.results)
              })
    },[])

    if(!movie  || !recommendation){
        return <Loading/>
    }
    function matchGenre(){
        const arr = []
        for(let i = 0; i < movie.genres.length; i++){
            genres.forEach(genre=>{
                if(genre.id === movie.genres[i].id){
                    arr.push(movie.genres[i].name)
                }
            })
        }
        return arr
    }

    return(
        <div className={s.wrapper}>
            <h2 className={s.title}>Movie details</h2>
            <div className={s.container}>
                <div className={s.photoContainer}>
                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : basePhoto }/>
                    <FollowUnfollow favoriteMovie={favoriteMovie} setFavoriteMovie={setFavoriteMovie} movie={movie}/>
                </div >
            <div className={s.description}>
                <p>{movie.title}</p>
                <span className={s.overview}>{movie.overview}</span>
                <div className={s.genres}>{matchGenre().map((i, index)=><span key={index} className={s.matchGenre}>{i}</span>)}</div>
            </div>
            </div>
           <h2>Recommendation</h2>
            <div className={s.recommendation}>{recommendation.map(i=>{

                return <div key={i.id} className={s.movie}>
                    <span>{i.title}</span>
                    <div className={s.scale}><img src={i.poster_path ? `https://image.tmdb.org/t/p/w200${i.poster_path}` : basePhoto }/></div>
                </div>
            })}</div>
        </div>

    )
}
export default MovieDetail