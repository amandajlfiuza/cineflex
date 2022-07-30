import './ChooseSeatsScreen.css';
import Command from '../Command/Command';
import Seats from '../Seats/Seats';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import MovieBaseboard from '../MovieBaseboard/MovieBaseboard';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function ChooseSeatsScreen() {
    const params = useParams();
    const [sessions, setSessions] = React.useState(null);
    const idsSeats = [];
    const nameSeats = [];

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        promise.then((resp) => {
            setSessions(resp.data);
        })
    }, [])

    return (
        sessions ? (
        <div className='choise-seats'>
            <Command title='Selecione o(s) assento(s)' />
            <Seats seats={sessions.seats} idsSeats={idsSeats} nameSeats={nameSeats} />
            <PurchaseForm movie={sessions.movie} session={sessions} idsSeats={idsSeats} nameSeats={nameSeats} />
            <MovieBaseboard movie={sessions.movie} sessionChosen={sessions} />
        </div>
        ) : ""
    )
}