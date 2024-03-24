import clsx from 'clsx';
import styles from '../Ship/style.module.css';
import shippingIcon from '../../assets/images/ShippingIcon.png';
import PaymentIcon from '../../assets/images/PaymentIcon.png';
import ExchangeIcon from '../../assets/images/Repeat.png';
import TimeIcon from '../../assets/images/24hicon.png';
import ShipCard from '../ShipCard';

export default function Ship() {
  return (
    <ul className={clsx(styles.container)}>
      <li>
        <ShipCard
          icon={shippingIcon}
          name="Free Shipping"
          desc="Contrary to popular belief 
          ipsum is simply random."
        />
      </li>
      <li>
        <ShipCard
          icon={PaymentIcon}
          name="instant payment "
          desc="Contrary to popular belief 
          ipsum is simply random."
        />
      </li>
      <li>
        <ShipCard
          icon={ExchangeIcon}
          name="exchange & return"
          desc="Contrary to popular belief 
          ipsum is simply random."
        />
      </li>
      <li>
        <ShipCard
          icon={TimeIcon}
          name="custom service"
          desc="Contrary to popular belief 
          ipsum is simply random."
        />
      </li>
    </ul>
  );
}
