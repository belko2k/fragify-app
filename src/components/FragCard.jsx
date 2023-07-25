import { Link } from 'react-router-dom';
import styles from '../styles/FragCard.module.css';

// eslint-disable-next-line react/prop-types
const FragCard = ({ id, image, brand, name }) => {
  return (
    <Link to={id} key={id}>
      <div className={styles['card']}>
        <img src={image} />
        <div className={styles['details']}>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default FragCard;
