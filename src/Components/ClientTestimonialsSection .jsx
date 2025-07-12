import React from 'react';
import clientImg from '../assets/client.jpg'; // Your image here
// Optional custom CSS
import delivery from '../assets/Timely Delivary.jpg'; // Adjust the path as necessary
import Guranteed from '../assets/Guranteed.jpg'; // Adjust the path as necessary
import expert from '../assets/Expert Design.jpg'; // Adjust the path as necessary

const ClientTestimonialsSection = () => {
  return (
    <>
      {/* Testimonial Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h4 className="fw-bold mb-3">Trusted by 100+ homeowners just like you</h4>
          <p className="text-muted mb-4">Don’t just take our word for it—hear from the clients whose homes we’ve transformed.</p>

          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card mx-auto shadow p-3" style={{ maxWidth: '500px' }}>
                  <img src={clientImg} alt="Client" className="rounded mb-3" style={{ height: '300px', objectFit: 'cover' }} />
                  <p className="text-muted small">
                    Exceptional experience with JustCreativeDesign! From initial consultation to final touches, they exceeded expectations.
                    Professional, creative, and attentive team. Our space transformed beautifully, reflecting our style perfectly. Highly recommended!
                  </p>
                  <h6 className="fw-bold mt-2">Savita Bellipapa</h6>
                </div>
              </div>

              {/* Add more .carousel-item here if needed */}
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>

            {/* Carousel indicators */}
            <div className="carousel-indicators mt-3">
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" />
              {/* Add more if needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h4 className="fw-bold mb-5">Why Choose Just Creative Design?</h4>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="icon-circle mx-auto mb-3">
                  <img src={expert} alt="Design Icon" height="40" />
                </div>
                <h6 className="fw-bold">Expert Design</h6>
                <p className="text-muted small">
                  We bring your vision to life with creative and personalized interior design solutions, ensuring every detail is crafted to perfection.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="icon-circle mx-auto mb-3">
                  <img src={delivery} alt="Guarantee Icon" height="40" />
                </div>
                <h6 className="fw-bold">Guaranteed</h6>
                <p className="text-muted small">
                  Your satisfaction is our priority, and we won’t rest until you’re completely happy with your new space.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="icon-circle mx-auto mb-3">
                  <img src={Guranteed} alt="Delivery Icon" height="40" />
                </div>
                <h6 className="fw-bold">Delivery</h6>
                <p className="text-muted small">
                  We respect your time and ensure that your project is completed on schedule without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h4 className="fw-bold mb-3">Ready To Bring Your Vision To Life?</h4>
          <a href="#" className="btn btn-light btn-sm px-4">Book A Free Consultation Call</a>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonialsSection;
