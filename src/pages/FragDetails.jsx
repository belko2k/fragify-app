import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allFragrances } from '../data/constants';
import style from '../styles/FragDetails.module.css';

const emptyFrag = {
  id: '',
  name: '',
  brand: '',
  image: '',
  notes: {},
  perfumers: [],
  prices: [],
};

const FragDetails = () => {
  const { id } = useParams();
  const [frag, setFrag] = useState(emptyFrag);
  const [clickedButtonValue, setClickedButtonValue] = useState();

  useEffect(() => {
    const target = allFragrances.find((p) => p.id === id);
    setFrag(() => target || emptyFrag);

    if (target && target.prices.length > 0) {
      setClickedButtonValue(target.prices[0].price);
    }
  }, [id]);

  useEffect(() => {
    document.title = `${frag.name} | ${frag.brand} | Fragify`;
  }, [frag.name, frag.brand]);

  const handleButtonClick = (e) => {
    const value = e.target.value;
    setClickedButtonValue(value);
  };

  console.log(clickedButtonValue);

  return (
    <div className={style['even-columns']}>
      <div className={style['left-col']}>
        <img className={style['frag-img']} src={frag.image} alt={frag.name} />
      </div>
      <div className={style['right-col']}>
        <p className={style.brand}>{frag.brand}</p>
        <p className={style.name}>{frag.name}</p>
        <hr />
        <p className={style.price}>€{clickedButtonValue}</p>
        <div className={style['btn-wrapper']}>
          {frag.prices.map((price) => (
            <button
              className={style.btn}
              key={price.bottle_size}
              value={price.price}
              onClick={handleButtonClick}
            >
              {price.bottle_size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FragDetails;
