import clsx from 'clsx';
import styles from '../ShipCard/style.module.css';

export default function ShipCard({ icon, name, desc }) {
  console.log(icon);
  return (
    <div className={clsx(styles.container)}>
      <img src={`${icon}`} alt="icon" className={clsx(styles.icon)} />
      <p className={clsx(styles.nameText)}>{name}</p>
      <span className={clsx(styles.desc)}>{desc}</span>
    </div>
  );
}
