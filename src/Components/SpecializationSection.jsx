import React from 'react';
import kitchenImg from '../assets/kitchen.jpg';
import wardrobeImg from '../assets/wardrobe.jpg';
import extraImg from '../assets/interior.jpg'; // Third image for mobile view

const SpecializationSection = () => {
  return (
    <>
      {/* Top Black Bar */}
      <div className="bg-dark text-white py-2 text-center">
        <h5 className="mb-2">We specialize in</h5>
        <div className="d-flex flex-wrap justify-content-center gap-3 small">
          <span>Space Planning & Arrangement</span>
          <span>Color Consultation & Palette Selection</span>
          <span>Lighting Design & Installation</span>
          <span>Custom Furniture Design</span>
          <span>Custom Finishes</span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Card 1: Kitchen */}
          <div className="col-md-6 d-none d-md-block">
            <div className="card h-100 shadow-sm">
              <img src={kitchenImg} className="card-img-top" alt="Kitchen Design" />
              <div className="card-body">
                <h5 className="card-title">Create the Kitchen You’ve Always Wanted</h5>
                <p className="card-text">Let’s bring your vision to life with a kitchen that’s as Practical as it is beautiful.</p>
                <a href="#" className="btn btn-outline-dark btn-sm">Discover more</a>
              </div>
            </div>
          </div>

          {/* Card 2: Wardrobe */}
          <div className="col-md-6 d-none d-md-block">
            <div className="card h-100 shadow-sm">
              <img src={wardrobeImg} className="card-img-top" alt="Wardrobe Design" />
              <div className="card-body">
                <h5 className="card-title">Your Perfect Wardrobe, Tailored by Us</h5>
                <p className="card-text">From luxurious walk-ins to sleek storage solutions, see how we can make your wardrobe dreams a reality.</p>
                <a href="#" className="btn btn-outline-dark btn-sm">Discover more</a>
              </div>
            </div>
          </div>

          {/* Card 3: Extra Card for Mobile */}
          <div className="col-12 d-block d-md-none">
            <div className="card h-100 shadow-sm">
              <img src={extraImg} className="card-img-top" alt="Interior Design" />
              <div className="card-body">
                <h5 className="card-title">Interior Design That Speaks Your Style</h5>
                <p className="card-text">Discover how we blend aesthetics and functionality to create beautiful living spaces on small budgets too.</p>
                <a href="#" className="btn btn-outline-dark btn-sm">Discover more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-dark text-white text-center py-5">
        <h4 className="fw-bold">We Design Homes That Are Built To Last</h4>
        <p className="mb-4 px-3">
          Your home deserves the best. And therefore, we source only the finest materials to ensure your home not only looks
          stunning but stands the test of time
        </p>
        <a href="#" className="btn btn-light btn-sm">Find out how we do it</a>
      </div>
    </>
  );
};

export default SpecializationSection;
