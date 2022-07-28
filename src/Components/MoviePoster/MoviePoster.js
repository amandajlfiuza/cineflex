import { Link, useParams } from 'react-router-dom';
import './MoviePoster.css';

export default function MoviePoster({id, posterURL}) {
    const params = useParams();
    params.idFilme = id;
    const route = `/sessoes/${params.idFilme}`

    return (
        <Link to={route}>
            <div className='background-poster'>
                <img className='movie-poster' src={posterURL} />
            </div>
        </Link>
    )
}