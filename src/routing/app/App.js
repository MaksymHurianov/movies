import React, {useEffect, useState} from "react";
import Search from "../searchPage/SearchPage";
import {Redirect, Route, Switch} from "react-router";
import HomePage from "../homePage/HomePage";
import MovieDetail from "../movieDetails/MovieDetail";
import FavoriteMovies from "../favoriteMovies/FavoriteMovies";
import Header from "../../components/header/nav/Header";
import BurgerNav from "../../components/header/burgerNav/BurgerNav";




function App() {
    const [value, setValue] = useState('')
    const [favoriteMovie, setFavoriteMovie] = useState([])
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])


    useEffect(()=>{
        const data = localStorage.getItem('storageFavoriteMovies')
        if(data){
            setFavoriteMovie(JSON.parse(data))
        }

    },[])

    useEffect(()=>{
        localStorage.setItem('storageFavoriteMovies', JSON.stringify(favoriteMovie))
    })

    return (
        <>
            <Header/>
            <BurgerNav/>
            <Switch>
            <Route path={'/'} exact render={()=><HomePage
                value={value}
                setValue={setValue}
                favoriteMovie={favoriteMovie}
                setFavoriteMovie={setFavoriteMovie}
                movies={movies}
                setMovies={setMovies}
                genres={genres}
                setGenres={setGenres}
            />}/>
            <Route path={'/movie/:id'} exact render={()=><MovieDetail
                genres={genres}
                setGenres={setGenres}
                setFavoriteMovie={setFavoriteMovie}
                favoriteMovie={favoriteMovie}
            />}/>
            <Route path={'/search'} exact render={()=><Search
                value={value}
                setValue={setValue}
                favoriteMovie={favoriteMovie}
                setFavoriteMovie={setFavoriteMovie}
                movies={movies}
                genres={genres}
                setGenres={setGenres}
            />}/>
            <Route path={'/favorites'} exact render={()=><FavoriteMovies
                favoriteMovie={favoriteMovie}
                setFavoriteMovie={setFavoriteMovie}
                movies={movies}
                genres={genres}
                setGenres={setGenres}
                setMovies={setMovies}

            />}/>
            <Route path={ '/404' } render={ () => <h1>404: PAGE NOT FOUND</h1> }/>
            <Redirect from={ '*' } to={'/404'}/>
            </Switch>
            </>
    );
}

export default App;
