import React, { useState } from 'react';
import './HomePage.css';
import { Homes } from '../components/home-files/Homes';
import { popularData, latestData, watchtData } from '../dummyData';
import { PopularMovies } from '../components/popular-movies/PopularMovies';
import { recommendedData } from '../dummyData';


export const HomePage = () => {

  const [items, setitems] = useState(popularData)
  const [item, setitem] = useState(latestData)
  const [item1, setItem] = useState(watchtData)
  const [rec, setrec] = useState(recommendedData)


  return (
  <>
  
  <Homes />
  
  <PopularMovies items={items} title="Popular Now" />
  <PopularMovies items={item} title="Latest Movies" />

<PopularMovies items={item1} title="Watch Now" />
  <PopularMovies items={rec} title="Recommended Movies" />
  

  </>
  )
}
