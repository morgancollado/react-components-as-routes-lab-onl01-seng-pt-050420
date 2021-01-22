import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const act = actors.map(a => {
    const mov = a.movies.map(m => {
      return( 
        <li>{m}</li>
      )
    })
    return (
      <div>
        <h3>{a.name}</h3>
        <ul>
          {mov}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
        {act}
    </div>
  );
};

export default Actors;
