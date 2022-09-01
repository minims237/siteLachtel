import "./styles/TransactionItem.styles.css";

const TransactionItem = (props: any) => {
  return (
    <tr className="column_title">
      <td>{props.number}</td>
      <td>{props.value}</td>
      <td>{props.part_number}</td>
      <td>{props.amount}</td>
      <td>{props.monent}</td>
    </tr>
  );
};

export default TransactionItem;
