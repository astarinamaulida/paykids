import ChildrensRequestListItem from "./ChildrensRequestListItem";


export default function ChildrensRequestList(props) {
  const requestsList = [
    { id: 1 , child_id: 1, account_number: 1, request_amount: 5,  request_note: 'lunch money'},
    { id: 2 , child_id: 1, account_number: 1, request_amount: 15, request_note: 'hair thing'},
    { id: 3 , child_id: 1, account_number: 1, request_amount: 30, request_note: 'Sephora'}
  ];
  
  const parsedRequests = Array.isArray(requestsList) && 
  requestsList.map(request => (
    <ChildrensRequestListItem  {...request} key={request.id} />));
    
  return (
    <div>
      <h3>Approve Request List</h3>
      <section>
       {parsedRequests }
      </section>
    </div>
  )
}

 //    <article className="frame">
  //    <span>
  //      <p>Recent Transactions</p>
  //    </span>
  //    <div className="row">{parsedTransactions}</div>
  //  </article>