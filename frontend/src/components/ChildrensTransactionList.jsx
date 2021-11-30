import ChildrensTransactionListItem from "./ChildrensTransactionListItem";

export default function ChildrensTransactionList(props) {
  const transactionsList = [
    { id: 1 , child_id: 1, account_number: 1, transaction_amount: 50, transaction_note: 'www.sephora.com'},
    { id: 2 , child_id: 1, account_number: 1, transaction_amount: 52, transaction_note: 'www.toyskingdom.ca'},
    { id: 3 , child_id: 1, account_number: 1, transaction_amount: 53, transaction_note: 'www.chapters.indigo.ca'},
    { id: 4 , child_id: 1, account_number: 1, transaction_amount: 50, transaction_note: 'www.amazon.ca'},
    { id: 5 , child_id: 1, account_number: 1, transaction_amount: 52, transaction_note: 'Money From Dad'},
    { id: 6 , child_id: 1, account_number: 1, transaction_amount: 53, transaction_note: 'www.walmart.ca'},
  ];
  
  const parsedTransactions = Array.isArray(transactionsList) && 
    transactionsList.map(transaction => (
      <ChildrensTransactionListItem  {...transaction} key={transaction.id} />));

  return (
    <div>
      <section>
       {parsedTransactions}
      </section>
    </div>
  )
}