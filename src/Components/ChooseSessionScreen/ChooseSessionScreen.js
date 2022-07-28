import './ChooseSessionScreen.css';
import Command from '../Command/Command';
import Sessions from '../Sessions/Sessions';
import MovieBaseboard from '../MovieBaseboard/MovieBaseboard';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function ChooseSessionScreen() {
    const params = useParams();
    const [sessions, setSessions] = React.useState(null);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`);
        promise.then((resp) => {
            setSessions(resp.data);
        })
    }, []);
    
    return (
        sessions ? (
            <div className='choise-session'>
                <Command title='Selecione o horário' />
                <Sessions sessionsDays={sessions.days} />
                <MovieBaseboard sessions={sessions}/>
            </div>
        ) : ""        
    )
}