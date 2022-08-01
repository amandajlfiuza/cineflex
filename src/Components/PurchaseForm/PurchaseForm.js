import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PurchaseForm.css';

export default function PurchaseForm({movie, session, idsSeats, nameSeats}) {
    const [nameBuyer, setNameBuyer] = React.useState('');
    const [document, setDocument] = React.useState('');
    const navigate = useNavigate();
    let idsSelected = idsSeats;
    //let idsSelected = idsSeats.sort((a, b) => a - b);
    let seatsSelected = nameSeats;
    //let seatsSelected = nameSeats.sort((a, b) => a - b);

    function postData(e) {
        e.preventDefault();
        const send = {
            ids: idsSelected,
            name: nameBuyer,
            cpf: document
        };

        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", send);
        promise.then(() => {
            navigate("/sucesso", {state: {movie, session, nameBuyer, document, seatsSelected}});
        })
    }
    
    return (
        <form onSubmit={postData}>
            <label htmlFor="formName">Nome do comprador:</label>
            <input id="formName" type="text" placeholder="Digite seu nome..." value={nameBuyer} required onChange={e => setNameBuyer(e.target.value)} />

            <label htmlFor="formDocument">CPF do comprador:</label>
            <input id="formDocument" type="number" placeholder="Digite seu CPF..." value={document} required onChange={e => setDocument(e.target.value)} />

            <button type="submit">Reservar assento(s)</button>
        </form>
    )
}