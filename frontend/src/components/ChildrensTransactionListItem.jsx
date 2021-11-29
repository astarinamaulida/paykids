export default function ChildrensTransactionListItem(props) {
  const {transaction_amount, transaction_note} = props;

  return (
    <div>
        <h3>{transaction_note}</h3>
        <h3>{transaction_amount}</h3>
    </div>
  )
}