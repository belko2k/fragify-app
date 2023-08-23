import Navbar from './Navbar';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo-black.png';
import { Link } from 'react-router-dom';
import { BsList, BsXLg } from 'react-icons/bs';
import { useState } from 'react';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <header className={styles.header}>
      <button
        aria-controls="primary-navigation"
        className={styles['menu-btn']}
        onClick={() => handleExpand()}
      >
        {isExpanded ? <BsXLg size={42} color="white" /> : <BsList size={42} />}
      </button>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="fragify logo" />
      </Link>
      <Navbar isExpanded={isExpanded} />
    </header>
  );
};

export default Header;
