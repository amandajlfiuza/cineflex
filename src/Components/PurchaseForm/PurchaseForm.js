import axios from 'axios';
import React from 'react';
import './PurchaseForm.css';

export default function PurchaseForm({idsSeats}) {
    const [nameBuyer, setNameBuyer] = React.useState('');
    const [document, setDocument] = React.useState('');
    let idsSelected = idsSeats.filter((id, index) => idsSeats.indexOf(id) === index);

    function postData(e) {
        e.preventDefault();
        const send = {
            ids: idsSelected,
            name: nameBuyer,
            cpf: document
        };

        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", send);
        promise.then(() => {
            console.log(send);
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