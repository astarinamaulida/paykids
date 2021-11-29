import ChildrensRequestList from "./ChildrensRequestList";
import ChildrensTransactionList from "./ChildrensTransactionList";
import CreditCard from "./CreditCard";

export default function ChildrensDashboard (props) {
  return (
  <div>
    <div>
      <h1>I am ChildrensDashboard</h1>
    </div>
    {/* <div>
      <CreditCard />
    </div> */}
    <div>
      <ChildrensTransactionList />
    </div>
  </div>
  )
}