import React from 'react';
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

const Home = () => (
    <>
        <HeroImage />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtns />
    </>
)

export default Home