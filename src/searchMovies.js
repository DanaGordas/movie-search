import React, {useState} from 'react';
import './searchMovies.css';
import MovieCard from './movieCard';

export default function SearchMovies(){

    // states - input query, movies
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const getMovie = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=219f3f9316a3e58c24aadbcb399d75f7&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={getMovie}>
                <label
                    htmlFor="query"
                    className="label"
                >
                    Movie Name
                </label>
                <input 
                    className="input"
                    type="text"
                    name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                    className="button"
                    type="submit"
                >
                    Search
                </button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(m => (
                    <MovieCard m={m} />
                )
                )}
            </div>
        </>
    )
}