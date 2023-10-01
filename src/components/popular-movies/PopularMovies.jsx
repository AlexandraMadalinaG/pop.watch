import React from 'react';
import './PopularMovies.css';
import { PopularCard } from './PopularCard';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    )
  }
  
  const SamplePrevArrow = (props) => {
    const { onClick } = props 
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa fa-chevron-left"></i>
        </button>
      </div>
    )
  }



export const PopularMovies = ({ items, title }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive:[
          {
            breackpoint:800,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }  
        ]
        
    };

  return (
    <>
    <section className="popular-movies">
        <div className="container">
            <div className="heading flex1">
               <h1>{title}</h1> 
               <Link to="./Movies">View All</Link>
            </div>
           <div className="content">
           <Slider {...settings}>
            {items.map((item) =>(
             <PopularCard key={item.id} item={item}/>   
             
             ))}

             </Slider>

            </div> 
        </div>
    </section>
    
    </>
  )
}
