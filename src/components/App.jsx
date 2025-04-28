import Profile from "./Profile";
import userData from "./userData.json";
import friends from "./Friends.json";
import FriedList from "./FriendList";
import TransactionHistory from "./transactionsHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
        image={userData.avatar}
      />
      <FriedList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
