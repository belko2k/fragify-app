import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="all-products">All Fragrances</NavLink> */}
      <NavLink to="men">Men&apos;s </NavLink>
      <NavLink to="women">Women&apos;s</NavLink>
    </nav>
  );
};

export default Navbar;
