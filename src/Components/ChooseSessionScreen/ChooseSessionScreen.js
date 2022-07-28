import './ChooseSessionScreen.css';
import Command from '../Command/Command';
import Sessions from '../Sessions/Sessions';
import MovieBaseboard from '../MovieBaseboard/MovieBaseboard';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function ChooseSessionScreen() {
    const { idFilme } = useParams();
    const [sessions, setSessions] = React.useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => {
            setSessions(response.data);
        })
    }, []);

    console.log(sessions);
    return (
        <div className='choise-session'>
            <Command title='Selecione o horário' />
            <Sessions sessionsDays={sessions.days} />
            <MovieBaseboard />
        </div>
    )
}