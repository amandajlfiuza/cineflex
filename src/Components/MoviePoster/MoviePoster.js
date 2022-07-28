import { Link } from 'react-router-dom';
import './MoviePoster.css';

export default function MoviePoster({id, posterURL}) {
    const route = `/sessoes/${id}`

    return (
        <Link to={route}>
            <div className='background-poster'>
                <img className='movie-poster' src={posterURL} />
            </div>
        </Link>
    )
}