import Navbar from './Navbar';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo-black.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <Navbar />
    </header>
  );
};

export default Header;
