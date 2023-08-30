import FeaturedFrags from '../components/FeaturedFrags';
import Hero from '../components/Hero';

const Home = () => {
  document.title = 'Home | Fragify';

  return (
    <div>
      <Hero />
      <FeaturedFrags />
    </div>
  );
};

export default Home;
