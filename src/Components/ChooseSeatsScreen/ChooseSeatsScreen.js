import './ChooseSeatsScreen.css';
import Command from '../Command/Command';
import Seats from '../Seats/Seats';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import MovieBaseboard from '../MovieBaseboard/MovieBaseboard';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ChooseSeatsScreen() {
    const params = useParams();
    const [sessions, setSessions] = useState(null);
    let [idsSeats, setIdsSeats] = useState([]);
    let [nameSeats, setNameSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        promise.then((resp) => {
            setSessions(resp.data);
        })
    }, []);

    return (
        sessions ? (
        <div className='choise-seats'>
            <Command title='Selecione o(s) assento(s)' />
            <Seats seats={sessions.seats} idsSeats={idsSeats} setIdsSeats={setIdsSeats} nameSeats={nameSeats} setNameSeats={setNameSeats} />
            <PurchaseForm movie={sessions.movie} session={sessions} idsSeats={idsSeats} nameSeats={nameSeats} />
            <MovieBaseboard movie={sessions.movie} sessionChosen={sessions} />
        </div>
        ) : ""
    )
}