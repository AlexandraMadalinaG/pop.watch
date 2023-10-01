import React, { useEffect, useState } from 'react';
import './SinglePage.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { homeData } from '../../dummyData';
import { PopularMovies } from '../popular-movies/PopularMovies';
import { recommendedData } from '../../dummyData';
import { Link } from 'react-router-dom';





export const SinglePage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)


 useEffect(() =>{
    let item =homeData.find((item) => item.id === parseInt(id))
    if(item) {
        setItem(item)
    }

 }, [id])
 const [rec, setrec] = useState(recommendedData)




 




  return (
    <> {item? (
        <>
        <section className="single-page">
            <div className="single-heading">
                <h1>{item.name}</h1>
                <span> | {item.time} | </span>
                <span>HD</span>
            </div>

            <div className="container">
                <video src={item.videoId} controls></video>
               <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                
                </div> 

                <div className="social">
                    <h3>Share : </h3>
                    <Link className="social-link" to="/https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></Link>
                    <Link className="social-link" to="/https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></Link>
                    <Link className="social-link" to="/https://twitter.com/"><i class="fa-brands fa-twitter"></i></Link>
                </div>
            </div>
        </section>
        <PopularMovies items={rec} title="Recommended Movies" />
        </>
    ):null}</>
  )
}
