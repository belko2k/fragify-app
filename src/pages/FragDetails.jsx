import { useParams } from 'react-router-dom';
import { allFragrances } from '../data/constants';

const FragDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

export default FragDetails;
