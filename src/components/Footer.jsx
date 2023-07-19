import styles from '../styles/Footer.module.css';
import logo from '../assets/logo-white.png';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
// import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['col-wrapper']}>
        <div className={styles['left-col']}>
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles['icons-wrapper']}>
            <IconContext.Provider value={{ size: 28 }}>
              <Link to="/">
                <FaInstagram />
              </Link>
              <Link to="/">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaTwitter />
              </Link>
              <Link to="/">
                <FaTiktok />
              </Link>
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles['right-col']}>{/* <FooterNav /> */}</div>
      </div>
      <p className={styles.copy}>&copy; Belko2k</p>
    </footer>
  );
};

export default Footer;
