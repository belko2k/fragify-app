import Navbar from './Navbar';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo-black.png';
import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs';

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles['menu-btn']}>
        <BsList size={42} />
      </button>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="fragify logo" />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
