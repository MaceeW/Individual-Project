import '../styles/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import LunaLogo from '../assets/LunaLogo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={LunaLogo} alt="Luna Music Logo" className="logo" />
      </Link>
      <ul className="navList">
        <li className="dropdown">
          <Link to="/shop" className="dropbtn">Shop</Link>
          <div className="dropdown-content">
            <Link to="/shop">All Products</Link>
            <Link smooth to="/#preorders">Pre-orders</Link>
            <a href="https://shop.lunamusic.net/LUNA-music-t-shirts-s/1814.htm" target="_blank" rel="noopener noreferrer">T-Shirts</a>
          </div>
        </li>
        <li className="dropdown">
          <Link smooth to="/#about" className="dropbtn">About</Link>
          <div className="dropdown-content">
            <Link smooth to="/#about">Our Story</Link>
            <Link smooth to="/#kickingjams">Since '94</Link>
          </div>
        </li>
        <li><Link smooth to="/#we-buy-vinyl">We Buy Vinyl</Link></li>
        <li><Link smooth to="/#blog">Blog</Link></li>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </ul>
    </nav>
  );
}

export default Navbar;