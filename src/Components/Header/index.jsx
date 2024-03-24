import clsx from 'clsx';
import styles from '../Header/style.module.css';
import logo from '../../assets/images/gymLogo1.png';
import CartIcon from '../../assets/images/CartIcon.png';
import WishIcon from '../../assets/images/WishListIcon.png';
export default function Header() {
  return (
    <nav className={clsx(styles.headerContainer, styles.text)}>
      <div>
        <a href="/">
          <img src={logo} alt="Gym Logo" className={clsx(styles.gymLogo)} />
        </a>
      </div>
      <ul className={clsx(styles.navContainer)}>
        <li className={clsx(styles.textActive)}>HOME </li>
        <li className={clsx(styles.textHover)}>ABOUT US </li>
        <li className={clsx(styles.textHover)}>PACKAGES</li>
        <li className={clsx(styles.textHover)}>SHOP</li>
        <li className={clsx(styles.textHover)}>BLOG</li>
        <li className={clsx(styles.textHover)}>CONTACT US</li>
      </ul>
      <div>
        <input
          type="text"
          placeholder="search"
          className={clsx(styles.inputStyle)}
        />
      </div>
      <ul className={clsx(styles.navContainer)}>
        <li className={clsx(styles.textHover)}>LOGIN/REGISTER</li>
        <li>
          <img src={CartIcon} alt="Cart Icon" />
        </li>
        <li>
          <img src={WishIcon} alt="Wish List Icon" />
        </li>
      </ul>
    </nav>
  );
}
