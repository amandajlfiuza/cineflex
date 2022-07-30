import './MovieBaseboard.css';

export default function MovieBaseboard({movie, sessionChosen}) {
    return (
        <div className='baseboard'>
            <div className='background'>
                <img className='poster' src={movie.posterURL} />
            </div>
            <div className='info'>
                <div className='title'>{movie.title}</div>
                <div className='session-time'>{`${sessionChosen.day.weekday} - ${sessionChosen.name}`}</div>
            </div>
        </div>
    )
}