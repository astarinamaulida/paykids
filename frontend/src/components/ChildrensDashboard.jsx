import ChildrensTransactionList from "./ChildrensTransactionList";
import CreditCard from "./CreditCard";
import Button from "muicss/lib/react/button";

export default function ChildrensDashboard(props) {
  return (
    <main className="container">
         <p className="heading">Tina: Dashboard </p>
      <article className="frame-credit-card">
        <div className="text">
          <p>Credit Card Information</p>
        </div>
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"
          />
          <CreditCard />
        </div>
        <article className="frame-recent">
          <span>
            <p>Recent Transactions</p>
          </span>
          <div>
            <ChildrensTransactionList />
          </div>
        </article>
      </article>
    </main>
  );
}
