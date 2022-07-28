import React from 'react';
import './Seats.css';

export default function Seats({seats}) {
    const [classSeat, setClassSeat] = React.useState('');

    const renderSeats = seats.map((seat, index) => (
        <div key={index} className={seat.isAvailable ? 'circle available' : 'circle unavailable'}> 
            {seat.name}
        </div>)
    );

    return (
        <div className='seats'>
            <div className='layout'>
                {renderSeats}
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

/*<Seat classSeat={classSeat} setClassSeat={setClassSeat} />*/