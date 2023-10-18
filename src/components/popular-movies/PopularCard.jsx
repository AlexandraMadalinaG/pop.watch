import React from 'react';
import './PopularMovies.css';



export const PopularCard = ({ item: { id, cover, name, time }}) => {
  return (
    <>
    <div className="movie-box">
<div className="img">
  <img className="cover" src={cover} alt="" />
</div>
<div className="text">
  <h3>{name}</h3>
  <span className="time">{time}</span> <br />
 
</div>
    </div>
    
    </>
  )
}
