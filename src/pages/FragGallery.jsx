import { useEffect, useState } from 'react';
import FragCard from '../components/FragCard';
import { allFragrances } from '../data/constants';
import style from '../styles/FragGallery.module.css';
import Breadcrumbs from '../components/Breadcrumbs';
import Banner from '../components/Banner';

const FragGallery = ({ categoryType, title }) => {
  const [category, setCategory] = useState(allFragrances);

  useEffect(() => {
    switch (categoryType) {
      case 'allFragrances': {
        setCategory(allFragrances);
        break;
      }
      case 'men': {
        const men = allFragrances.filter(
          (fragrance) => fragrance.gender === 'men'
        );
        setCategory(men);
        break;
      }
      case 'women': {
        const women = allFragrances.filter(
          (fragrance) => fragrance.gender === 'women'
        );
        setCategory(women);
        break;
      }
      default:
        setCategory(allFragrances);
    }
  }, [categoryType]);

  useEffect(() => {
    document.title = `${categoryType} | Fragify`;
  }, [categoryType]);

  return (
    <div>
      <Banner title={title} />
      <div className={style.wrapper}>
        <Breadcrumbs />
        <div className={style.grid}>
          {category.map((frag) => {
            return <FragCard key={frag.id} content={frag} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FragGallery;
