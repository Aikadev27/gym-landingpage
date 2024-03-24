import clsx from 'clsx';
import styles from '../ProductCard/style.module.css';

export default function ProductCard({ image, price, name }) {
  return (
    <div className={clsx(styles.container)}>
      <img src={image} alt="product image" className={clsx(styles.image)} />
      <p className={clsx(styles.name)}>{name}</p>
      <p className={clsx(styles.price)}>{price}</p>
      <button className={clsx(styles.button)}>Add to Cart</button>
    </div>
  );
}
