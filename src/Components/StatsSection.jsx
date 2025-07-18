import React, { useState } from 'react';
import interiorImg from '../assets/interior.jpg';
import beforeImg from '../assets/before.jpg'; // Black & White
import afterImg from '../assets/after.jpg';   // Color
import '../Components/StatsSection.css'; // For custom styling

const StatsSection = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="container py-5">
      {/* Stats */}
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
      <div className="text mb-5 text-center">
        <h4 className="fw-bold">Transforming Spaces, Changing Lives</h4>
        <p className="text-muted">
          We elevate ordinary areas to extraordinary spaces that capture your vision and style.
        </p>
      </div>

      {/* Image Comparison using two different images */}
      <div className="comparison-container mb-5">
        {/* BEFORE image (Black & White) on top */}
        <div
          className="comparison-image before"
          style={{
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
            backgroundImage: `url(${beforeImg})`,
          }}
        ></div>

        {/* AFTER image (Color) in background */}
        <div
          className="comparison-image after"
          style={{ backgroundImage: `url(${afterImg})` }}
        ></div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider"
        />
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
