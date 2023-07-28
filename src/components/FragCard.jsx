import { Link } from 'react-router-dom';
import styles from '../styles/FragCard.module.css';

const FragCard = (props) => {
  const { content } = props;

  return (
    <Link to={`/fragrances/${content.gender}/${content.id}`}>
      <div className={styles['card']}>
        <img src={content.image} />
        <div className={styles['details']}>
          <p className={styles.brand}>{content.brand}</p>
          <p className={styles.name}>{content.name}</p>
          <div className={styles.price}>
            {content.prices[0].price.toFixed(2).replace('.', ',')}€
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FragCard;
