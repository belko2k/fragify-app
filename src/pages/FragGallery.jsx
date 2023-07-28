import { useEffect, useState } from 'react';
import FragCard from '../components/FragCard';
import { allFragrances } from '../data/constants';
import { men } from '../data/constants';
import { women } from '../data/constants';
import style from '../styles/FragGallery.module.css';
import PropTypes, { string } from 'prop-types';
import Breadcrumbs from '../components/Breadcrumbs';

const FragGallery = ({ categoryType, title }) => {
  const [category, setCategory] = useState(allFragrances);

  useEffect(() => {
    switch (categoryType) {
      case 'allFragrances': {
        setCategory(allFragrances);
        break;
      }
      case 'men': {
        setCategory(men);
        break;
      }
      case 'women': {
        setCategory(women);
        break;
      }
      default:
        setCategory(allFragrances);
    }
  }, [categoryType]);

  return (
    <div>
      <div className={style.banner}>{title}</div>
      <div className={style.wrapper}>
        <Breadcrumbs />
        <div className={style.grid}>
          {category.map((frag) => {
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
      </div>
    </div>
  );
};

//props

FragGallery.propTypes = {
  categoryType: PropTypes.oneOf(['allFragrances', 'men', 'women']).isRequired,
  title: string,
};

export default FragGallery;
