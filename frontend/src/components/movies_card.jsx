import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {

// movie is an javascript object
    function onLike(){
        alert("Clicked! ")
    }
    
    return (
        <div className="movie-card">
            <div className="movie_poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite" onClick={onLike}>♥</button>
                </div>
            </div>
            <div className="movie_info">
                <h1>
                    {movie.title}
                </h1>
                <p>
                    {movie.release_date}
                </p>
            </div>
        </div>
    );

}

export default MovieCard