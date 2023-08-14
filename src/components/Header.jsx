import Navbar from './Navbar';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo-black.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
