import React from "react";
import s from './followUnfollow.module.css'

function FollowUnfollow({ favoriteMovie, setFavoriteMovie, movie}){
    let c = true
    function addToFavoriteList(e, movie){

        e.stopPropagation()
        setFavoriteMovie(prev=> [...prev, movie])
    }

    function removeFromFavoriteList(e,movie){
        e.stopPropagation()
        const d = favoriteMovie.filter((i)=>{
            return i.id !== movie.id
        })
        setFavoriteMovie(d)


    }


        favoriteMovie.forEach(i=>{
            if(i.id === movie.id){
                c = false
            }
        })


    return(
        <>
        {c
                ? <button className={s.follow} onClick={(e)=>addToFavoriteList(e, movie)}>Добавить в избранное</button>
                :<button className={s.unfollow} onClick={(e)=>removeFromFavoriteList(e, movie)}>Удалить из избранного</button>}
        </>
    )
}
export default FollowUnfollow