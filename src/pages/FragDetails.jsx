import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allFragrances } from '../data/constants';

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
    <div>
      <div className="left-col">
        <img src={frag.image} alt={frag.name} />
      </div>
      <div className="right-col">
        <p>{frag.brand}</p>
        <p>{frag.name}</p>
        <p>€{clickedButtonValue}</p>
        {frag.prices.map((price) => (
          <button
            key={price.bottle_size}
            value={price.price}
            onClick={handleButtonClick}
          >
            {price.bottle_size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FragDetails;
