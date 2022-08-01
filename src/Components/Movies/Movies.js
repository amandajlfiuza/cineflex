import './Movies.css';
import MoviePoster from '../MoviePoster/MoviePoster';

export default function Movies({movies}) {
    const renderMovies = movies.map((movie) => (
        <MoviePoster 
            key={movie.id}
            id={movie.id}  
            posterURL={movie.posterURL} 
            title={movie.title}
        />
        ));

    return (
        <div className='movies'>
            {renderMovies}
        </div>
    )
}