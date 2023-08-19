import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="fragrances">Fragrances</NavLink>
      <NavLink to="fragrances/men">Men&apos;s</NavLink>
      <NavLink to="fragrances/women">Women&apos;s</NavLink>
    </nav>
  );
};

export default MobileNavbar;
