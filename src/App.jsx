// Imports
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// API URL (Ensure it's HTTPS)
const API_URL = 'https://www.omdbapi.com?apikey=9ab1c1bb';

// App Function
const App = () => {
    // State
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    // Function to Fetch Movies
    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            if (data.Response === "True") {
                setMovies(data.Search || []); // Prevent setting undefined
            } else {
                setMovies([]); // If no results, set an empty array
                console.error("Error fetching movies:", data.Error);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    // Initial Movie Fetch (Optional: Change Default Search Term)
    useEffect(() => {
        searchMovies("Batman"); // Default search term instead of an empty string
    }, []);

    // Event handler for key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search);
        }
    };

    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(search)}
                />
            </div>

            {movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
