import { Link } from 'react-router-dom';
import styles from '../styles/FragCard.module.css';
import PropTypes from 'prop-types';

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

FragCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      bottle_size: PropTypes.string,
      price: PropTypes.number,
    }).isRequired
  ).isRequired,
};

export default FragCard;
