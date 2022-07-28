import './MovieBaseboard.css';

export default function MovieBaseboard() {
    return (
        <div className='baseboard'>
            <div className='background'>
                <img className='poster' src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" />
            </div>
            <div className='info'>
                <div className='title'>Enola Holmes</div>
                <div className='session-time'>Quinta-feira - 15:00</div>
            </div>
        </div>
    )
}