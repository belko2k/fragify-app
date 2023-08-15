import { Link } from 'react-router-dom';
import styles from '../styles/FooterNav.module.css';

const FooterNav = () => {
  return (
    <nav className={styles['footer-nav']}>
      <ul aria-label="Footer Navigation" role="list">
        <div className="left-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </div>
        <div className="right-list">
          <li>
            <Link to="/">Community</Link>
          </li>
          <li>
            <Link to="/">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default FooterNav;
