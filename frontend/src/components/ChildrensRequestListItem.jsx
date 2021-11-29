export default function ChildrensRequestListItem(props) {
  const {request_note, request_amount} = props;
 
  return (
    <div>
      <h3>{request_note}</h3>
      <h3>{request_amount}</h3>
    </div>
  )
}