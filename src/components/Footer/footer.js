import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
           
          </ul>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li>Diversity & Belonging</li>
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            
          </ul>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Airbnb. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
