import './ChooseSeatsScreen.css';
import Command from '../Command/Command';
import Seats from '../Seats/Seats';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import Button from '../Button/Button';
import MovieBaseboard from '../MovieBaseboard/MovieBaseboard';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function ChooseSeatsScreen() {
    const params = useParams();
    const [seats, setSeats] = React.useState(null);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        promise.then((resp) => {
            setSeats(resp.data);
        })
    }, [])

    return (
        seats ? (
        <div className='choise-seats'>
            <Command title='Selecione o(s) assento(s)' />
            <Seats seats={seats.seats} />
            <PurchaseForm />
            <Button title="Reservar assento(s)" />
            <MovieBaseboard movie={seats.movie} sessionChosen={seats} />
        </div>
        ) : ""
    )
}