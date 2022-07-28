import { Link } from 'react-router-dom';
import './Session.css';

export default function Session({
                                id, 
                                date, 
                                showtimes, 
                                weekday,
                                }) {
    
    const fullDate = `${weekday} - ${date}`;

    const randomShowTimes = showtimes.map((showtime, index) => (
        <Link key={index} to={"/assentos/" + showtime.id}>
            <div className='time'>{showtime.name}</div>
        </Link>
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