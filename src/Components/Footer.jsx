import React from 'react';
import logo from '../assets/logo.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Optional for additional styling

const Footer = () => {
  return (
    <footer className="bg-white border-top pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-md-start text-center gy-4 justify-content-between align-items-start">
          {/* Logo */}
          <div className="col-12 col-md-3 mb-3">
            <img src={logo} alt="Just Creative Designs" height="40" />
            <p className="small text-muted mt-2 mb-0">Just Creative Designs.</p>
          </div>

          {/* Footer Sections */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Shop By</h6>
            <ul className="list-unstyled small text-muted">
              <li>Wardrobe</li>
              <li>Kitchen</li>
              <li>Kids</li>
              <li>Commercial</li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled small text-muted">
              <li>About us</li>
              <li>Our Service</li>
              <li>Customers</li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Get Help</h6>
            <ul className="list-unstyled small text-muted">
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-2">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="#" className="text-dark fs-5"><FaLinkedin /></a>
              <a href="#" className="text-dark fs-5"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted small pt-4 mt-4 border-top">
          <p className="mb-0">
            <span className="me-1">©</span>Copyright 2025 JustCreateDesign — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
