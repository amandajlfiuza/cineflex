import React from 'react';
import './Seats.css';

function Seat({classSeat, setClassSeat}) {
    let renderSeat = "";

    for (let i=0; i<50; i++) {
        renderSeat += (
            <div className={classSeat} onClick={() => setClassSeat('circle unavailable')}>
                {i+1}
            </div>)
    }

    return renderSeat;
}

export default function Seats() {
    const [classSeat, setClassSeat] = React.useState('circle available');

    return (
        <div className='seats'>
            <div className='layout'>
                
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