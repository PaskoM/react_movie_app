import React, { useState } from 'react';
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
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

import NoImage from './images/no_image.jpg';

const Home = () => {
    
    const [
        {
            state: { movies, currentPage, totalPages, heroImage },
            loading,
            error,
        },
            fetchMovies,
    ] = useHomeFetch();
    
    const [searchTerm, setSearchTerm] = useState('')
    
    const loadMoreMovies = () => {
        const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`;
        const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`;

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

        fetchMovies(endpoint);
    }



    if (error) return <div>Something went wrong ...</div>;
    if (!movies[0]) return <Spinner />;

    return (
    <>
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title = {
                    heroImage.original_title
                }
                text={heroImage.overview}
            />
        <SearchBar />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`: NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))
                }
            </Grid>
            { loading && <Spinner />}
            {currentPage < totalPages && !loading && (
                <LoadMoreBtns  text="Load More" callback={loadMoreMovies} />
            )}
        </>
    )
}

export default Home