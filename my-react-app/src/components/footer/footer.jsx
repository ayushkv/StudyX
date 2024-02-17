import React from 'react';
import './footer.css'; 
import { Link as ScrollLink } from 'react-scroll';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About StudyX</h2>
          <p>
            StudyX is an online learning platform dedicated to providing
            high-quality courses in various domains. Our mission is to make
            education accessible and engaging for learners around the world.
          </p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><ScrollLink to="#" smooth={true}>Certification Programs</ScrollLink></li>
            <li><ScrollLink to="#" smooth={true}>Career Services</ScrollLink></li>
            <li><ScrollLink to="#" smooth={true}>Upcoming Events</ScrollLink></li>
            <li><ScrollLink to="#" smooth={true}>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FAQs</ScrollLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? Reach out to our support team at
            support@studyx.com.
          </p>
          <div className='social-links'><i className="fa-brands fa-twitter"></i> &nbsp; &nbsp;  
          <i className="fa-brands fa-square-instagram"></i> &nbsp; &nbsp;
          <i className="fa-brands fa-facebook"></i> &nbsp; &nbsp;
          <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 StudyX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
