import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const mov = movies.map(m => {
    const genre = m.genres.map(g => {
      return <li>{g}</li>
    })
    return(
      <div>
        <h2>{m.title}</h2>
        <p>Run time: {m.time}</p>
        <ul>
          {genre}
        </ul>
      </div>
    )
  })
  return (
    <div>
        <h1>Movies Pages</h1>
        {mov}
    </div>
  );
};

export default Movies;
