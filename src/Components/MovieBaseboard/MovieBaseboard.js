import './MovieBaseboard.css';

export default function MovieBaseboard({sessions}) {
    return (
        <div className='baseboard'>
            <div className='background'>
                <img className='poster' src={sessions.posterURL} />
            </div>
            <div className='info'>
                <div className='title'>{sessions.title}</div>
                <div className='session-time'>Quinta-feira - 15:00</div>
            </div>
        </div>
    )
}