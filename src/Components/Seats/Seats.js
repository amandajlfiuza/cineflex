import React from 'react';
import './Seats.css';

function Seat({seat, idsSeats}) {
    const [classSeat, setClassSeat] = React.useState('circle available');

    const select = (e) => {
        if (classSeat === 'circle available') {
            setClassSeat('circle selected');
            idsSeats.push(seat.id);
        } else {
            setClassSeat('circle available');
        }
    }

    return (
        <div className={seat.isAvailable ? classSeat : 'circle unavailable'} onClick={() => select(this)}> 
            {seat.name}
        </div>
    )
}

export default function Seats({seats, idsSeats}) {
    return (
        <div className='seats'>
            <div className='layout'>
                {seats.map((seat, index) => (<Seat  key={index} seat={seat} idsSeats={idsSeats} />))}
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