import React, {useEffect, useState} from "react";
import {fetchMovies, getGenres} from "../../api/movies.api";
import ReactPaginate from 'react-paginate'
import s from '../app/App.module.css'
import {useHistory} from "react-router";
import Movies from "../../components/movies/Movies";
import { FiSearch } from 'react-icons/fi';
import Loading from "../../components/loading/Loading";
import style from './homePage.module.css'


function HomePage({value, setValue, favoriteMovie, setFavoriteMovie, movies, setMovies, genres,setGenres } ) {
    const [page, setPage] = useState(1)
    const [isLoading, setLoading] = useState(true)
    const [pageCount, setPageCount] = useState(1)
    const history = useHistory()


    useEffect(()=>{

        fetchMovies(page).then((data)=>{
            setMovies(data.data.results)
            setPageCount(data.data.total_pages)
            setLoading(false)
        })
        getGenres().then((data)=>{
            setGenres(data.data.genres)
        })
        window.scrollTo(0, 0)
    }, [page])


    function pageChange(e){
        setPage(e.selected+1)
    }
    function submit(e){
        e.preventDefault()
        history.push('/search')
    }
    if(isLoading){
        return <Loading/>
    }

    return (
        <div >

            <div className={'form'}>
            <form onSubmit={submit} >
                <input className={'search-form'} value={value} placeholder={"Search for a movie..."} onChange={(e)=>setValue(e.currentTarget.value)}/>
                <button className={'search-button'} > <FiSearch /></button>
            </form>
            </div>
            <h2 className={s.title}>Popular movies</h2>


            <Movies movies={movies}
                    genres={genres}
                    favoriteMovie={favoriteMovie}
                    setFavoriteMovie={setFavoriteMovie}/>

            <div className={`issuesPagination ${s.pagination} ${style.pagination}`}  >
            <ReactPaginate
                forcePage={0}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName={s.pagination}

            />
            </div>
            <div className={`issuesPagination ${s.pagination} ${style.miniPagination}`}  >
                <ReactPaginate
                    forcePage={0}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={0}
                    pageCount={pageCount}
                    onPageChange={pageChange}
                    containerClassName={s.pagination}

                />
            </div>

        </div>
    );
}

export default HomePage;