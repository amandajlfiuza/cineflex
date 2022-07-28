import './Sessions.css';
import Session from '../Session/Session';

export default function Sessions({sessionsDays}) {
    return (
        <div className='sessions'>
            {sessionsDays ? sessionsDays.map((session, index) => (
                <Session 
                    key={index}
                    id={sessionsDays.id}
                    date={session.date} 
                    showtimes={session.showtimes} 
                    weekday={session.weekday} 
                />
            )) : ""}
        </div>
    )
}