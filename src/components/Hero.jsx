import { Link } from 'react-router-dom';
import banner from '../assets/banners/banner_dhi.jpg';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Link to="/">
        <img className={styles.img} src={banner} alt="dior homme intense" />
      </Link>
    </section>
  );
};

export default Hero;
