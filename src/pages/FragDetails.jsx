import { useParams } from 'react-router-dom';

const FragDetails = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default FragDetails;
