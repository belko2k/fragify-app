import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import { useState } from 'react';

const FragLayout = () => {
  const [bannerContent, setBannerContent] = useState({
    title: '',
  });
  const [fragranceSort, setFragranceSort] = useState('recommended');

  const handleFragranceSort = (e) => {
    setFragranceSort(() => e.target.value);
  };

  return (
    <div className="frag-layout">
      <Banner content={bannerContent} />
      <main className="products">
        <div className="products-sorter">
          <label htmlFor="product-sort" className="products-sorter__label">
            Sort By:
            <select
              name="productSortOrder"
              id="product-sort"
              className="products-sorter__selection"
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
        <section className="products-display">
          <Outlet
            context={{
              setBannerContent,
              fragranceSort,
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default FragLayout;
