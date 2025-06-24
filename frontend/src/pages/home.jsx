import MovieCard  from "../components/movies_card"
import {useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState(" ");
    const [movies,setMovies] = useState([]);   

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(err){
                console.log(err);
                setError("Failed to load");
            }
            finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult);
            setError(null);
        }
        catch(err){
            console.log(err);
            setError("Failed to serach data");
        }
        finally {
            setLoading(false);
        }
    };

    return <div className="home">
        <form onSubmit = {handleSearch} className="search_form">
            <input type="text" placeholder = "Search for movies..."  className="search-input" value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}/>
            <button type="submit" className="search-button">Search</button>
        
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                //movie.title.toLowerCase().startsWith(searchQuery) &&
                <MovieCard movie= {movie} key= {movie.id}/>
                )
            )
            }
        </div>
    </div>
}


export default Home