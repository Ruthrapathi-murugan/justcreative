import React from 'react';
import './heroSection1.css'; // For custom styling
import desktopHero from '../assets/hero-desktop.jpg'; // Adjust the path as necessary
import mobileHero from '../assets/hero-mobile2.jpg'; // Adjust the path as necessary
import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" height="40" />

          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Price Calculator</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Service</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Material</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>

          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-image-container position-relative text-center text-md-start">
        <picture>
          <source media="(max-width: 576px)" srcSet={mobileHero} />
          <img src={desktopHero} alt="Hero" className="img-fluid w-100 hero-image" />
        </picture>

        
      </div>
      <div className="hero-text-container container position-absolute top-50 start-50 translate-middle text-white">
                  </div>
                  <h1 className="display-6 fw-bold" style={{paddingLeft:"20px"}}>Your Dream Home Starts Here</h1>
          
          <p className="lead mt-2" style={{paddingLeft:"20px"}}>We, at Just Creative Designs, turn your house into a home with interiors that are stylish, functional, and uniquely yours.</p>
  <div className='buttons d-flex flex-wrap gap-3 mt-3' style={{paddingLeft:"20px"}}>
  <a href="#" className="btn btn-dark">Free Consultation Call</a> 
  <a href="#" className="btn btn-white">Get a Free Quote</a>
</div>
    </div>

  );
};

export default HeroSection;
