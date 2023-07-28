import { Link } from 'react-router-dom';
import styles from '../styles/FragCard.module.css';

const FragCard = ({ id, image, brand, name, prices }) => {
  return (
    <Link to={id} key={id}>
      <div className={styles['card']}>
        <img src={image} />
        <div className={styles['details']}>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.name}>{name}</p>
          <div className={styles.price}>
            {prices[0].price.toFixed(2).replace('.', ',')}€
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FragCard;
