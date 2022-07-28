import './ChooseMovieScreen.css';
import Command from '../Command/Command';
import Movies from '../Movies/Movies';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function ChooseMovieScreen() {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
        promise.then((resp) => {
            setMovies(resp.data);
        })
    }, []);

    return (
        <div className='home'>
            <Command title='Selecione o filme' />
            <Movies movies={movies} />
        </div>
    )
}