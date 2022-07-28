import './Sessions.css';
import Session from '../Session/Session';

export default function Sessions({sessionsDays}) {
    const randomSessions = sessionsDays.map((session, index) => (
        <Session 
            key={index}
            date={session.date} 
            showtimes={session.showtimes} 
            weekday={session.weekday} 
        />
    ))
    return (
        <div className='sessions'>
            {randomSessions}
        </div>
    )
}