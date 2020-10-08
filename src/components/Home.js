import React, { useState, useEffect } from 'react';
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../config';

//import Components 
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtns from './elements/LoadMoreBtns';
import Spinner from './elements/Spinner'

//custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
    
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();

    return (
    <>
        <HeroImage />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtns />
        </>
    )
}

export default Home