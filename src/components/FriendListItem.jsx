import styles from "./FriendsListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
