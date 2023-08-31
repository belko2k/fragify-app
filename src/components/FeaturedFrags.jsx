import { allFragrances } from '../data/constants';
import FragCard from './FragCard';
import style from '../styles/FeaturedFrags.module.css';

const FeaturedFrags = () => {
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledFragrances = shuffleArray(allFragrances).slice(0, 4);

  return (
    <section className={style.featured}>
      <h2 className={style['featured-title']}>FEATURED</h2>
      <div className={style.grid}>
        {shuffledFragrances.map((frag) => (
          <FragCard key={frag.id} content={frag} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedFrags;
