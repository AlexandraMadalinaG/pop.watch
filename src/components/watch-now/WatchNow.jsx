import React, { useState, useEffect } from 'react';
import './WatchNow.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Home } from '../home-files/Home';
import { watchData } from '../../dummyData';
import { recommendedData } from '../../dummyData';


export const WatchNow = () => {

  const {id} = useParams()
    const [item, setItem] = useState(null)


 





   
  return (
    <>
<section className="watch">
    <Home items={items} />
</section>

    </>
  )
}
