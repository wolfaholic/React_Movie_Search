import React from 'react';

//Movie Card Component to render out each movie. With Year, Poster (if applicable) or Placeholder, Title, Type

const MovieCard = ({ movie: {imdbID, Year, Poster, Type, Title} }) => {
    return (
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div> 
            <div>
                <img 
                    src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
                    alt={Title}
                />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;