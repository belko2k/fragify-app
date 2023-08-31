import FeaturedFrags from '../components/FeaturedFrags';
import Hero from '../components/Hero';
import style from '../styles/Home.module.css';

const Home = () => {
  document.title = 'Home | Fragify';

  return (
    <div className={style['home-wrapper']}>
      <Hero />
      <FeaturedFrags />
    </div>
  );
};

export default Home;
