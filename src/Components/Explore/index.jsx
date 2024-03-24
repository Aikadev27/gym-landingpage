import clsx from 'clsx';
import styles from '../Explore/style.module.css';
import ExploreCard from '../ExploreCard';
import Yoga from '../../assets/images/explore/yoga.png';
import Cardio from '../../assets/images/explore/cardio.png';
import Fitness from '../../assets/images/explore/fitness.png';
import Workout from '../../assets/images/explore/workout.png';
import Zumbar from '../../assets/images/explore/zumbar.png';
import Body from '../../assets/images/explore/body.png';

export default function Explore() {
  return (
    <ul className={clsx(styles.container)}>
      <li>
        <ExploreCard bgImage={Yoga} name="yoga" destination={'#'} />
      </li>
      <li>
        <ExploreCard bgImage={Fitness} name="fitness" />
      </li>
      <li>
        <ExploreCard bgImage={Cardio} name="cardio" />
      </li>
      <li>
        <ExploreCard bgImage={Zumbar} name="zumbar" />
      </li>
      <li>
        <ExploreCard bgImage={Workout} name="workout" />
      </li>
      <li>
        <ExploreCard bgImage={Body} name="bodybuilding" />
      </li>
    </ul>
  );
}
