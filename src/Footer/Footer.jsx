import "./Footer.css";
import img from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row footer-inner">
        {/* About Section */}
        <div className="about col-lg-4 col-md-6 col-sm-12">
          <img src={img} alt="logo" className="footer-logo" />
          <p>
            Planet Hero Foundation | Transforming Lives since 2012. We are
            dedicated to education, healthcare, women empowerment, and
            environmental sustainability across India.
          </p>
        </div>

        {/* Address */}
        <div className="address col-lg-3 col-md-6 col-sm-12 mt-5">
          <h4>Registered Office</h4>
          <p>
            123 Green Way, Sector 45,
            <br />
            New Delhi, India – 110045
          </p>
        </div>

        {/* Contact Info */}
        <div className="contact col-lg-2 col-md-6 col-sm-12 mt-5">
          <h4>Contact</h4>
          <p>📞 +91-9876543210</p>
          <p>✉️ contact@planethero.org</p>
          <p>🌐 www.planethero.org</p>
        </div>

        {/* Quick Links */}
        <div className="quick-links col-lg-2 col-md-6 col-sm-12 mt-5">
          <h4>Quick Links</h4>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#volunteer">Volunteer</a>
            <a href="#testimonial">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="copywrite p-auto">
        © 2012–2025 Planet Hero Foundation | All Rights Reserved{" "}
      </div>
    </footer>
  );
};

export default Footer;
