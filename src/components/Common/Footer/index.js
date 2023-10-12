import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import logoImage from "../../../images/logoImage.png"

const Footer = () => {


  return (
    <div className='Footer'>
    <footer className="footer-distributed">
    <div className="footer-left">

    <img src={logoImage} className='headerImg footerImg' style={{width:"12rem"}} alt='logoImage'/>

        <p className="footer-links">
            <Link to="/" className="link-1">Home</Link>
            
            <Link to="/shop">Shop</Link>
        
            <Link to="/cart">Cart</Link>
        
            <Link to="/about">About</Link>
            
            <Link to="#">Contact</Link>
        </p>

        <p className="footer-company-name">LeafLuxe © 2023</p>
    </div>

    <div className="footer-center">

        <div>
            <i className="fa fa-map-marker"></i>
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
        </div>

        <div>
            <i className="fa fa-envelope"></i>
            <p><Link to="mailto:support@company.com">support@company.com</Link></p>
        </div>

    </div>

    <div className="footer-right">

        <p className="footer-company-about">
            <span>About the company</span>
            Discover a world of quality products and exceptional service with LeafLuxe. We're here to make your shopping experience memorable.
        </p>

        <div className="footer-icons">

            <aLink to="#"><i className="fa fa-facebook"></i></aLink>
            <aLink to="#"><i className="fa fa-twitter"></i></aLink>
            <aLink to="#"><i className="fa fa-linkedin"></i></aLink>
            <aLink to="#"><i className="fa fa-github"></i></aLink>

        </div>

    </div>

</footer>
</div>
  )
}


export default Footer;