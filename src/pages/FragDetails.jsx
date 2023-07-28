import { useParams } from 'react-router-dom';

const FragDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

export default FragDetails;
