import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
   const [Mobile, setMobile] = useState(false);




  return (
    <>
    <header>
        <div className="container flex1">
            <nav className="flex1">
               <div className="logo">
                <img src="../images/PopWatch_logo.jpg" alt="PopWatch logo" />
                </div> 

                <ul className={Mobile ? "navMenu-list":"flex1"} onClick={() => setMobile(false)}>
                   <Link className="link-account" to="/">Home</Link>
                   <Link className="link-account" to="/movies">Movies</Link>
                   <Link className="link-account" to="/signup">SignUp</Link>
                </ul>
                <button className='toggle' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>

            <div classname="account flex1">
                <i className="icon-account fa fa-bell"></i>
                <Link to="./SignUp"><i className="icon-account fa fa-user"></i></Link>
            </div>
        </div>
    </header>
    
    
    </>

  )
}
