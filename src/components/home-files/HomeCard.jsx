import React from 'react';
import { Link } from 'react-router-dom';




export const HomeCard = ({ item: { id, cover, name, rating, time, desc, stars, genres, tags, video } }) => {
  return (
    <>
    <div className="box">
      <div className="coverImage">
        <img src={cover} alt="" />
      </div>

      <div className="content flex">
      <div className="details row">
        <h1>{name}</h1>
        <div className="rating flex">
          <div className="rate">
          <i className="fa fa-star "></i>
          <i className="fa fa-star "></i>
          <i className="fa fa-star "></i>
          <i className="fa fa-star "></i>
          <i className="fa fa-star-half"></i>
        </div>


        <label>{rating}(Imdb)</label>
        <span>GP</span>
        <label>{time}</label>
        </div>
  
        <p>{desc}</p>

        <div className="cast">
          <h4>
            <span>Stars</span>
            {stars}
          </h4>

          <h4>
            <span>Genres</span>
            {genres}
          </h4>

          <h4>
            <span>Tags</span>
            {tags}
          </h4>
          </div>

        
        </div>

        
<div className="play-button row">
  <Link to={`/singlepage/${id}`}>
    <button>
      <div className="img-play">
        <img src={require("../../assets/play-button.png")} alt="" />
        <img src={require("../../assets/play.png")} alt="" className="change"/>
      </div>
      WATCH TRAILER
    </button>
  </Link>
</div>
        </div>
      </div>
      
    
  
    
    </>

  ) 
}


