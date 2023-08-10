import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allFragrances } from '../data/constants';
import style from '../styles/FragDetails.module.css';
import FragAccordion from '../components/FragAccordion';
import { Button } from '@chakra-ui/react';
import { FaCartShopping } from 'react-icons/fa6';

const emptyFrag = {
  id: '',
  name: '',
  brand: '',
  image: '',
  notes: {
    top: [],
    middle: [],
    base: [],
  },
  perfumers: [],
  prices: [],
};

const FragDetails = () => {
  const { id } = useParams();
  const [frag, setFrag] = useState(emptyFrag);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(0);

  useEffect(() => {
    const target = allFragrances.find((p) => p.id === id);
    setFrag(() => target || emptyFrag);

    if (target && target.prices.length > 0) {
      setClickedButtonIndex(0);
    }
  }, [id]);

  useEffect(() => {
    document.title = `${frag.name} | ${frag.brand} | Fragify`;
  }, [frag.name, frag.brand]);

  const handleButtonClick = (index) => {
    setClickedButtonIndex(index);
  };

  return (
    <div className={style['even-columns']}>
      <div className={style['left-col']}>
        <img className={style['frag-img']} src={frag.image} alt={frag.name} />
      </div>
      <div className={style['right-col']}>
        <p className={style.brand}>{frag.brand}</p>
        <p className={style.name}>{frag.name}</p>
        <hr />
        <p className={style.price}>€{frag.prices[clickedButtonIndex]?.price}</p>
        <hr className={style['price-divider']} />
        <div className={style['btn-wrapper']}>
          {frag.prices.map((price, index) => (
            <button
              className={style.btn}
              key={price.bottle_size}
              onClick={() => handleButtonClick(index)}
            >
              <span>{price.bottle_size}</span>
              <span>€{price.price}</span>
            </button>
          ))}
        </div>

        <Button
          colorScheme="gray"
          w="300px"
          leftIcon={<FaCartShopping />}
          alignSelf="center"
        >
          Add to cart
        </Button>

        <FragAccordion frag={frag} style={style} />
      </div>
    </div>
  );
};

export default FragDetails;
