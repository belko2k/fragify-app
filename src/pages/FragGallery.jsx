import { useEffect, useState } from 'react';
import FragCard from '../components/FragCard';
import { allFragrances } from '../data/constants';
import {
  allFragranceCategoryData,
  menCategoryData,
  womenCategoryData,
} from '../data/fragCategoryData';
import style from '../styles/FragGallery.module.css';
import { useOutletContext } from 'react-router-dom';

const FragGallery = ({ categoryType }) => {
  const [category, setCategory] = useState(allFragranceCategoryData);
  const { setBannerContent, fragranceSort } = useOutletContext();

  const sortFragrances = (fragrances, sortType) => {
    switch (sortType) {
      case 'recommended':
        return fragrances;
      case 'alphabetical-ascending':
        return fragrances.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'alphabetical-descending':
        return fragrances.slice().sort((a, b) => b.name.localeCompare(a.name));
      case 'price-ascending':
        return fragrances
          .slice()
          .sort((a, b) => a.prices[0].price - b.prices[0].price);
      case 'price-descending':
        return fragrances
          .slice()
          .sort((a, b) => b.prices[0].price - a.prices[0].price);
      default:
        return fragrances;
    }
  };

  const sortedFragData = sortFragrances(category.fragrances, fragranceSort);

  const currentFrags = sortedFragData;

  useEffect(() => {
    switch (categoryType) {
      case 'allFragrances': {
        setCategory(allFragranceCategoryData);
        break;
      }
      case 'men': {
        setCategory(menCategoryData);
        break;
      }
      case 'women': {
        setCategory(womenCategoryData);
        break;
      }
      default:
        setCategory(allFragrances);
    }
  }, [categoryType]);

  useEffect(() => {
    document.title = `${category.documentTitle}`;
  }, [category]);

  useEffect(() => {
    setBannerContent(() => category.banner);
  }, [category, setBannerContent]);

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.grid}>
          {currentFrags.map((frag) => {
            return <FragCard key={frag.id} content={frag} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FragGallery;
