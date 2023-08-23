import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="fragrances">Fragrances</NavLink>
        </li>
        <li>
          <NavLink to="fragrances/men">Men&apos;s</NavLink>
        </li>
        <li>
          <NavLink to="fragrances/women">Women&apos;s</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
