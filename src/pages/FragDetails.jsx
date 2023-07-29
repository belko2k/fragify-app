import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allFragrances } from '../data/constants';

const emptyFrag = {
  id: '',
  name: '',
  brand: '',
  image: '',
};

const FragDetails = () => {
  const { id } = useParams();

  const [frag, setFrag] = useState(emptyFrag);

  useEffect(() => {
    const target = allFragrances.find((p) => p.id === id);
    setFrag(() => target || emptyFrag);
  }, [id]);

  useEffect(() => {
    document.title = `${frag.name} | ${frag.brand} | Fragify`;
  }, [frag.name, frag.brand]);

  return (
    <div>
      <div>{frag.id}</div>
      <div>{frag.brand}</div>
      <img src={frag.image} alt="" />
    </div>
  );
};

export default FragDetails;
