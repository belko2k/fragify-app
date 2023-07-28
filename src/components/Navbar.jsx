import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="fragrances">Fragrances</NavLink>
      <NavLink to="fragrances/men">Men&apos;s</NavLink>
      <NavLink to="fragrances/women">Women&apos;s</NavLink>
    </nav>
  );
};

export default Navbar;
