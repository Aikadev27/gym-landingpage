import clsx from 'clsx';
import styles from '../Category/style.module.css';
import BlueCard from '../BlueCard';

export default function Category(props) {
  return (
    <ul className={clsx(styles.container)}>
      {props.blueCardList.map((item, index) => (
        <li key={index} className={clsx(styles.item)}>
          <BlueCard image={item.img} title={item.name} />
        </li>
      ))}
    </ul>
  );
}
