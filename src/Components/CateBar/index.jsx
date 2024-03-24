import clsx from 'clsx';
import styles from '../CateBar/style.module.css';

export default function CateBar({ categoryText }) {
  return (
    <div className={clsx(styles.categoryText)}>
      <h1 className={clsx(styles.headText)}>{categoryText}</h1>
      <p className={clsx(styles.seeText)}>See all</p>
    </div>
  );
}
