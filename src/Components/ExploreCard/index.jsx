import clsx from 'clsx';
import styles from '../ExploreCard/style.module.css';
export default function ExploreCard({ bgImage, name, destination }) {
  return (
    <a className={clsx(styles.container)} href={destination}>
      <img src={bgImage} alt="" className={clsx(styles.images)} />
      <div className={clsx(styles.textContainer)}>
        <p className={clsx(styles.text)}>{name}</p>
      </div>
    </a>
  );
}
