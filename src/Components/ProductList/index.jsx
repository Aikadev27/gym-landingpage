import clsx from 'clsx';
import styles from '../ProductList/style.module.css';

import ProductCard from '../ProductCard';

export default function ProductList(props) {
  return (
    <ul className={clsx(styles.listContainer)}>
      {props.productInfo.map((item, index) => (
        <li key={index} className={clsx(styles.item)}>
          <ProductCard
            image={item.productImg}
            price={item.price}
            name={item.name}
          />
        </li>
      ))}
    </ul>
  );
}
