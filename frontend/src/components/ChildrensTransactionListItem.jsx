export default function ChildrensTransactionListItem(props) {
  const { transaction_amount, transaction_note } = props;

  return (
    <main className="container">
      <article className="frame">
    <div className="frame">
       <span>
         <p>Recent Transactions</p>
       </span>
      <div className="row">
        <div className="frame-left">{transaction_note}</div>
        <div className="frame-right">{transaction_amount}</div>
      </div>
     </div>
     </article>
     </main>
  );
}
