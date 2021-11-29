import ChildrensTransactionListItem from "./ChildrensTransactionListItem";

export default function ChildrensTransactionList(props) {
  const transactionsList = [
    { id: 1 , child_id: 1, account_number: 1, transaction_amount: 50, transaction_note: 'Saphora'},
    { id: 2 , child_id: 1, account_number: 1, transaction_amount: 52, transaction_note: 'Game'},
    { id: 3 , child_id: 1, account_number: 1, transaction_amount: 53, transaction_note: 'Saphora'}
  ];
  
  const parsedTransactions = Array.isArray(transactionsList) && 
    transactionsList.map(transaction => (
      <ChildrensTransactionListItem  {...transaction} key={transaction.id} />));

  return (
    <div>
      <h1>I am ChildrensTransactionList</h1>
      <section>
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
      </section>
    </div>
  )
}