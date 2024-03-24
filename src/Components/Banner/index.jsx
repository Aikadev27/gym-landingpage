import clsx from 'clsx';
import styles from '../Banner/style.module.css';
import Smoke from '../../assets/images/banner/smoke.png';
import SportGirl from '../../assets/images/banner/sportgirl1.png';

import Ship from '../Ship';

export default function Banner() {
  return (
    <div>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.bannerContainer)}>
          <div className={clsx(styles.textContainer)}>
            <div>
              <div className={clsx(styles.bigTextContainer, styles.textMargin)}>
                <p>COME & CREATE YOUR</p>
                <p>
                  OWN <span className={clsx(styles.highlighText)}>NEW</span>{' '}
                  BODY
                </p>
              </div>
              <p className={clsx(styles.smallText, styles.textMargin)}>
                FASTER, STRONGER FIGHT TO THE END
              </p>
            </div>
            <button className={clsx(styles.button)}>More Details</button>
          </div>
          <div>
            <img src={SportGirl} alt="Sport girl" />
          </div>
        </div>

        <img src={Smoke} alt="Moke banner" className={clsx(styles.smoke)} />
      </div>
      {/* <div className={clsx(styles.shiContainer)}>
        <Ship />
      </div> */}
    </div>
  );
}
