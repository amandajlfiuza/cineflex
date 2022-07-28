import './Session.css';

export default function Session({
                                date, 
                                showtimes, 
                                weekday,
                                }) {
    
    const fullDate = `${weekday} - ${date}`;
    const randomShowTimes = showtimes.map((showtime) => (
        <div className='time'>{showtime.name}</div>
    ))

    return (
        <div className='session'>
            <div className='date'>{fullDate}</div>
            <div className='schedules'>
                {randomShowTimes}
            </div>
        </div>
    )
}