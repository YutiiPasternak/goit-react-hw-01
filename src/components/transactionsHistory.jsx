import styles from "./transactions.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.container}>
      {" "}
      <table className="transaction-history">
        <thead>
          <tr className={styles.list}>
            <th className={styles.items}>Type</th>
            <th className={styles.items}>Amount</th>
            <th className={styles.items}>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.wrapperForElement}>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={styles.id} key={id}>
              <td className={styles.type}>{type}</td>
              <td className={styles.amount}>{amount}</td>
              <td className={styles.currency}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
