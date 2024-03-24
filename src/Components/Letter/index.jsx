import clsx from 'clsx';
import styles from '../Letter/style.module.css';

export default function Letter({ image, isReverse, name }) {
  return (
    <div
      className={clsx(
        styles.letterContainer,
        `${isReverse ? styles.reverse : ''}`,
      )}
    >
      <img src={image} alt="letter image" className={clsx(styles.image)} />
      <div className={clsx(styles.textContainer)}>
        <h1 className={clsx(styles.name)}>{name}</h1>
        <p className={clsx(styles.text)}>
          Welcome to Our Gym, where fitness meets passion, and every drop of
          sweat tells a story of dedication. Our gym isn't just a place to work
          out; it's a community, a lifestyle, and a commitment to your
          well-being.We are committe d to providing a safe, inclusive, and
          inspiring space for individuals of all ages and fitness levels.
          Whether you're a seasoned gym-goer or just starting, is here to
          support you every step of the way.
        </p>
      </div>
    </div>
  );
}
