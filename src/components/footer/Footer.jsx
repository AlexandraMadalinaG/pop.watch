import React from 'react';
import './Footer.css';



export const Footer = () => {
  return (
    <>
    <footer>
        <div className="container-footer">
            <div className="box-footer">
                <ul className="flex-footer">
                    <li>Terms of Use</li>
                    <li>Privacy-Policy</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Watch List</li>
                </ul>
                <p>© 2023 by PopWatch. All Rights Reserved.</p>
            </div>
            <div className="box-footer">
                <h3 className="text-footer">Follow us</h3>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    </footer>
    
    </>
  )
}
