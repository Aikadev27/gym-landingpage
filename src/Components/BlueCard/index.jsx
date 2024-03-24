import clsx from 'clsx';
import styles from '../BlueCard/style.module.css';

export default function BlueCard({ image, title }) {
  return (
    <div className={clsx(styles.blueCardContainer)}>
      <img
        src={image}
        alt="blue card image"
        className={clsx(styles.blueCardImg)}
      />
      <p className={clsx(styles.blueCardTitle)}>{title}</p>
    </div>
  );
}
