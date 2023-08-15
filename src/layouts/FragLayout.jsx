import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import style from '../styles/FragLayout.module.css';

const FragLayout = () => {
  const [bannerContent, setBannerContent] = useState({
    title: '',
  });
  const [fragranceSort, setFragranceSort] = useState('recommended');

  const handleFragranceSort = (e) => {
    setFragranceSort(() => e.target.value);
  };

  return (
    <main>
      <Banner content={bannerContent} />
      <div className={style.flex}>
        <Breadcrumbs />
        <div>
          <label htmlFor="product-sort">
            Sort By:
            <select
              name="productSortOrder"
              id="product-sort"
              defaultValue="recommended"
              onChange={handleFragranceSort}
            >
              <option value="recommended">Recommended</option>
              <option value="alphabetical-ascending">Alphabetical: A-Z</option>
              <option value="alphabetical-descending">Alphabetical: Z-A</option>
              <option value="price-ascending">Price: Low to High</option>
              <option value="price-descending">Price: High to Low</option>
            </select>
          </label>
        </div>
      </div>
      <Outlet
        context={{
          setBannerContent,
          fragranceSort,
        }}
      />
    </main>
  );
};

export default FragLayout;
