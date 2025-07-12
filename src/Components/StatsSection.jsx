import React from 'react';
 // Optional for styling
import beforeImg from '../assets/before.jpg'; // Replace with actual before image
import afterImg from '../assets/after.jpg';   // Replace with actual after image
import interiorImg from '../assets/interior.jpg'; // Optional for bottom image

const StatsSection = () => {
  return (
    <div className="container py-5">
      {/* Stats Row */}
      <div className="row text-center mb-4">
        <div className="col-md-4">
          <h3>100+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="col-md-4">
          <h3>2L+ SF</h3>
          <p>Years of crafting - Space</p>
        </div>
        <div className="col-md-4">
          <h3>4.8</h3>
          <p>Rating</p>
        </div>
      </div>

      {/* Title + Subtitle */}
      <div className="text mb-5">
        <h4 className="fw-bold">Transforming Spaces, Changing Lives</h4>
        <p className="text-muted">
          We Elevate ordinary areas to extraordinary spaces, that capture your vision and style.
        </p>
      </div>

      {/* Image Comparison - Two side-by-side images */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <img src={beforeImg} alt="Before" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <img src={afterImg} alt="After" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Tailored Design Section */}
      <div className="text-center mb-4">
        <h4 className="fw-bold">Tailored Design Solutions For Every Corner Of Your Home</h4>
        <p className="text-muted px-2">
          From the first sketch to the final touch, our expert team ensures your vision is brought to life with beautifully-designed, functional spaces that you’ll love coming home to every day.
        </p>
      </div>

      <div className="text-center">
        <img src={interiorImg} alt="Interior" className="img-fluid rounded shadow" />
      </div>
    </div>
  );
};

export default StatsSection;
