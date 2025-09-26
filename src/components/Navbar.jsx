import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import LunaLogo from '../assets/LunaLogo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={LunaLogo} alt="Luna Music Logo" className="logo" />
      </Link>
      <ul className="navList">
        <li className="dropdown">
          <span className="dropbtn">Shop</span>
          <div className="dropdown-content">
            <a href="https://shop.lunamusic.net/category-s/1858.htm" target="_blank" rel="noopener noreferrer">Turntables</a>
            <a href="https://shop.lunamusic.net/LUNA-music-gift-cards-s/1477.htm" target="_blank" rel="noopener noreferrer">Gift Cards</a>
            <a href="https://shop.lunamusic.net/LUNA-music-t-shirts-s/1814.htm" target="_blank" rel="noopener noreferrer">T-Shirts</a>
          </div>
        </li>
        <li className="dropdown">
          <span className="dropbtn">About</span>
          <div className="dropdown-content">
            <Link to="/about">Our Story</Link>
            <Link to="/about#kickingjams">Since '94</Link>
          </div>
        </li>
        <li><Link to="/we-buy-vinyl">We Buy Vinyl</Link></li>
        <li><Link to="/blog">Blog</Link></li> 
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </ul>
    </nav>
  );
}

export default Navbar;