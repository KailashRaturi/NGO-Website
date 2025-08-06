import React from 'react';
import './Main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from '../images/pexels-rdne-6646778.jpg';
import img2 from '../images/pexels-rdne-6646877.jpg';
import img3 from '../images/pexels-rdne-6647060.jpg';

const Slider = () => {
  return (
    // slider start
    <div id="carouselExample" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">

            <h3 className='carasoul-data'>tTogether, We Can Make a Difference.</h3>
          <img src={img1} className="d-block  w-100" alt="Slide 1" />
          <div className="gradient-overlay"></div>
        </div>
        <div className="carousel-item">
            <h3 className='carasoul-data'>Empowering Lives, Building Futures </h3>
          <img src={img2} className="d-block w-100" alt="Slide 2" />
          <div className="gradient-overlay"></div>
        </div>
        <div className="carousel-item">
          <h3 className='carasoul-data'>Foundation is a non-profit organization</h3>
          <img src={img3} className="d-block w-100" alt="Slide 3" />
          <div className="gradient-overlay"></div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
