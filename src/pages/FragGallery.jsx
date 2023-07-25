import FragCard from '../components/FragCard';
import { allFragrances } from '../data/constants';
import style from '../styles/FragGallery.module.css';

const FragGallery = () => {
  return (
    <div className={style.grid}>
      {allFragrances.map((frag) => {
        return (
          <FragCard
            key={frag.id}
            brand={frag.brand}
            name={frag.name}
            prices={frag.prices}
            image={frag.image}
          />
        );
      })}
    </div>
  );
};

export default FragGallery;
