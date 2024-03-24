import clsx from 'clsx';
import styles from '../Footer/style.module.css';
import footerLogo from '../../assets/images/footer/footerLogo.png';

export default function Footer() {
  return (
    <footer className={clsx(styles.footerContainer)}>
      <div className={clsx(styles.logoContainer)}>
        <img src={footerLogo} alt="Footer Logo" />
        <p className={clsx(styles.text)}>
          Welcome to [Your Gym Name], where fitness meets passion, and every
          drop of sweat tells a story of dedication. Our gym isn't just a place
          to work out; it's a community, a lifestyle, and a commitment to your
          well-being.
        </p>
      </div>
      <div className={clsx(styles.rightContainer)}>
        <div>
          <h1 className={clsx(styles.categoryText)}>Company</h1>
          <ul>
            <li className={clsx(styles.textItem)}>
              <a href="#">About us</a>
            </li>
            <li className={clsx(styles.textItem)}>
              <a href="#">Contact us</a>
            </li>
            <li className={clsx(styles.textItem)}>
              <a href="#">Terms & Condition</a>
            </li>
            <li className={clsx(styles.textItem)}>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className={clsx(styles.categoryText)}>Support</h1>
          <ul>
            <li className={clsx(styles.textItem)}>
              <a href="#">FAQ</a>
            </li>
            <li className={clsx(styles.textItem)}>
              <a href="#">Help Center</a>
            </li>
            <li className={clsx(styles.textItem)}>
              <a href="#">How it words</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className={clsx(styles.categoryText)}>Social Media Link</h1>
          <ul>
            <li className={clsx(styles.textItem, styles.attentionText)}>
              <a href="https://www.facebook.com/nhan.gas.5/">
                FaceBook: Dinh Hoang Nhan
              </a>
            </li>
            <li className={clsx(styles.textItem, styles.attentionText)}>
              <a href="https://github.com/Aikadev27">Github: AikaDev27</a>
            </li>
            <li className={clsx(styles.textItem, styles.attentionText)}>
              <a href="#">Email Address: dinhhoangnhan202@gmail.com</a>
            </li>
            <li className={clsx(styles.textItem, styles.attentionText)}>
              <a href="#">Phone: +84707004827</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
