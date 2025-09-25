import { useState } from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/instagram.jpg';
import facebookLogo from '../assets/facebook.webp';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSignUp = () => {
    if (!email.trim()) {
      setMessage('Error input required');
      setIsError(true);
    } else {
      // In a real app, you would submit the email to a server here.
      setMessage('You have successfully signed up.');
      setIsError(false);
      setEmail(''); 
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>LUNA music</h3>
          <p>
            <a href="https://www.google.com/maps/place/5202+N+College+Ave,+Indianapolis,+IN+46220/@39.8470921,-86.1487419,17z/data=!3m1!4b1!4m6!3m5!1s0x886b53c5140cecd7:0x3321e27951aa1ef!8m2!3d39.847088!4d-86.146167!16s%2Fg%2F11c5kglt08?entry=tts" target="_blank" rel="noopener noreferrer" className="address-link">
              5202 N College Ave<br />Indianapolis, IN 46220
            </a>
            <br />
            <br />
            317-283-5862 (LUNA)
          </p>
          <h3 className="hours-heading">Hours of operation:</h3>
          <p className="hours-text">Mon - Sat: 11am - 7pm<br />Sun: 12pm - 5pm</p>
          <div className="social-icons">
            <a href="http://instagram.com/lunamusic" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/theLUNAmusic/" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="footer-section footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.893529948236!2d-86.1487418846224!3d39.84709207943497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b53c5140cecd7%3A0x3321e27951aa1ef!2s5202%20N%20College%20Ave%2C%20Indianapolis%2C%20IN%2046220!5e0!3m2!1sen!2sus!4v1620000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LUNA music location"
          ></iframe>
        </div>
        <div className="footer-section email-signup-section">
            <p className="email-text">
                Stay hip to the latest releases & events! Subscribe to the LUNA music newsclip!
            </p>
            <div className="footer-signup-form">
              <label htmlFor="footer-email">Email (required)</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="checkbox-container">
                <input id="footer-checkbox" type="checkbox" />
                <label htmlFor="footer-checkbox" className="checkbox-label">Sign up for news and updates</label>
              </div>
              <button onClick={handleSignUp}>Hit It!</button>
            </div>
            {message && <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p>}
        </div>
        <div className="footer-section">
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/we-buy-vinyl">We Buy Vinyl!</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
