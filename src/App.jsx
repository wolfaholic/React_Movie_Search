//imports
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//API
const API_URL = 'http://www.omdbapi.com?apikey=97bdd4aa'


//App Function
const App = () => {
    //state
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        searchMovies("");
    }, [])

    //search function and api call
    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }

    // Event handler for key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (e.key === 'Enter') {
                searchMovies(search);
            }
        }
    }
   

    return (
    <div className="app">
        <h1>Movie Land</h1>

        <div className="search">
            <input
                placeholder="search for movies"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
                />
                <img 
                    src={SearchIcon}
                    alt={"search"}
                    onClick={() => searchMovies(search)}
                    
                />
        </div> {/* search */}
     
        {movies?.length > 0 
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                        
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>Search For A Movie</h2>
                </div>
            )
        }

    </div>  
    ); {/* App */}
}

export default App;