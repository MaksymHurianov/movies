import React, {useEffect, useState} from "react";
import {getGenres, getSearchMovies} from "../../api/movies.api";
import ReactPaginate from 'react-paginate'
import s from '../app/App.module.css'
import Movies from "../../components/movies/Movies";
import {FiSearch} from "react-icons/fi/index";
import style from './searchPage.module.css'
import Loading from "../../components/loading/Loading";



function Search({value,setValue,genres,setGenres, favoriteMovie, setFavoriteMovie}) {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[page])

    useEffect(async ()=>{
        let dataGenres = await getGenres()
        setGenres(dataGenres.data.genres)
        if (value !== '') {
            let dataSearchMovies = await getSearchMovies(page, value)
            setMovies(dataSearchMovies.data.results)
        }
        setLoading(false)
    },[])

    function pageChange(e){
        setPage( prev => e.selected+1)
        if(value){
            getSearchMovies(e.selected+1, value).then(data=>{

                setMovies(data.data.results)
                setPageCount(data.data.total_pages)
            })
        }
    }
    function submit(e){
        e.preventDefault()
        if(value){
            getSearchMovies(page, value).then(data=>{
                setMovies(data.data.results)
                setPageCount(data.data.total_pages)
            })
        }
    }

    if(isLoading){
        return <Loading/>
    }

    return (
        <>
            <div className={'form'}>
            <form onSubmit={submit}>
                <input className={'search-form'} value={value} placeholder={"search movie"} onChange={(e)=>setValue(e.currentTarget.value)} />
                <button className={'search-button'} ><FiSearch /></button>
            </form>
            </div>
            <h2 className={s.title}>Search movie</h2>
            <>
                {movies.length===0
                    ? <div className={style.emptyField}><p>Фильм не найден</p></div>
                    :<Movies movies={movies} genres={genres} favoriteMovie={favoriteMovie} setFavoriteMovie={setFavoriteMovie}/>}
            </>
            <div className={`issuesPagination ${s.pagination}`}>
            <ReactPaginate
                initialPage={0}
                marginPagesDisplayed={3}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName={s.pagination}
            />
            </div>
        </>
    );
}

export default Search;