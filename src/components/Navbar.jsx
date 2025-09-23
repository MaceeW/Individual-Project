import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/addprofile">Add Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;