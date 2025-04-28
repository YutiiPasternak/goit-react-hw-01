// src/Product.jsx
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.firstWrapper}>
        <img className={styles.image} src={image} alt="User avatar" />
        <p className={styles.textName}>{name}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>

        <ul className={styles.statsList}>
          <li className={styles.statsItem}>
            <span className={styles.statsName}>Followers</span>
            <span className={styles.statsSpan}>{stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsName}>Views</span>
            <span className={styles.statsSpan}> {stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsName}>Likes</span>
            <span className={styles.statsSpan}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Profile;
