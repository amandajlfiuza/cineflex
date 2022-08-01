import React from 'react';
import './Seats.css';

function Seat({seat, idsSeats, setIdsSeats, nameSeats, setNameSeats}) {
    const [classSeat, setClassSeat] = React.useState('circle available');

    const select = () => {
        if (classSeat === 'circle available') {
            setClassSeat('circle selected');

            setIdsSeats(idsSeats.push(seat.id));
            setNameSeats(nameSeats.push(seat.name));

            console.log(`DPS DE MARCAR: ${idsSeats} - ${nameSeats}`);            

        } else {
            setClassSeat('circle available');

            let idsModified = idsSeats.filter((id) => id !== seat.id);
            let nameModified = nameSeats.filter((name) => name !== seat.name);

            setIdsSeats([...idsModified]);
            setNameSeats([...nameModified]);

            console.log(`DPS DE DESMARCAR: ${idsSeats} - ${nameSeats}`);
        }
    }

    return (
        <div className={seat.isAvailable ? classSeat : 'circle unavailable'} onClick={() => select()}> 
            {seat.name}
        </div>
    )
}

export default function Seats({seats, idsSeats, setIdsSeats, nameSeats, setNameSeats}) {
    return (
        <div className='seats'>
            <div className='layout'>
                {seats.map((seat, index) => (<Seat  key={index} seat={seat} idsSeats={idsSeats} setIdsSeats={setIdsSeats} nameSeats={nameSeats} setNameSeats={setNameSeats} />))}
            </div>
            <div className='labels'>
                <div className='label'>
                    <div className='circle selected'></div>
                    <div className='subtitle'>Selecionado</div>
                </div>
                <div className='label'>
                    <div className='circle available'></div>
                    <div className='subtitle'>Disponível</div>
                </div>
                <div className='label'>
                    <div className='circle unavailable'></div>
                    <div className='subtitle'>Indisponível</div>
                </div>
            </div>
        </div>
    )
}