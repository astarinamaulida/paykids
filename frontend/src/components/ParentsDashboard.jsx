import ChildrensTransactionList from "./ChildrensTransactionList";
import ParentsSendMoneyForm from "./ParentsSendMoneyForm";

export default function ParentsDashboard (props) {
  return (
    <div>
      <div>
        <h1>I am ParentsDashboard</h1>
      </div>
      <div>
        <ParentsSendMoneyForm />
      </div>
      <div>
        <ChildrensTransactionList />
      </div>
    </div>
  )
}