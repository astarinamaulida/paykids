import ChildrensRequestListItem from "./ChildrensRequestListItem";


export default function ChildrensRequestList(props) {
  const requestsList = [
    { id: 1 , child_id: 1, account_number: 1, request_amount: 5,  request_note: 'lunch money'},
    { id: 2 , child_id: 1, account_number: 1, request_amount: 15, request_note: 'hair thing'},
    { id: 3 , child_id: 1, account_number: 1, request_amount: 30, request_note: 'Saphora'}
  ];
  
  const parsedRequests = Array.isArray(requestsList) && 
  requestsList.map(request => (
    <ChildrensRequestListItem  {...request} key={request.id} />));
    
  return (
    <div>
      <h1>I am ChildrensRequestList</h1>
      <section>
       {parsedRequests }
      </section>
    </div>
  )
}