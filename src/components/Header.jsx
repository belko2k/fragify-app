import Navbar from './Navbar';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo-black.png';
import { FaCartShopping, FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>

      <FaMagnifyingGlass />
      <FaCartShopping />
      <Navbar />
    </header>
  );
};

export default Header;
