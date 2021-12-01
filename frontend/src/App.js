import logo from "./logo.svg";
import "./App.css";
import Button from "muicss/lib/react/button";
import ChildrensTransactionList from "./components/ChildrensTransactionList";
import ChildrensRequestList from "./components/ChildrensRequestList";
import ParentsApprovalList from "./components/ParentsApprovaIList";
import NavBar from "./components/NavBar";
import ParentsChildrenListItem from "./components/ParentsChildrenListItem";
import ParentsChildrenList from "./components/ParentsChidlrenList";
import ParentsDashboard from "./components/ParentsDashboard";
import ChildrensDashboard from "./components/ChildrensDashboard";
import ParentsSendMoneyForm from "./components/ParentsSendMoneyForm";
import ChildrensVisualSettings from "./components/ChildrensVisualSettings";
import ChildrensTransactionListItem from "./components/ChildrensTransactionListItem";
import Login from "./components/ChildrensLogin";
import CreditCard from "./components/CreditCard";
import ChildrensRequestForm from "./components/ChildrensRequestForm";

function App() {
  return (
    <div className="App">
      <nav>
        <img className="nav__logo" src="https://i.ibb.co/vByHTtJ/logo-blue.png"/>
      </nav>
      {/* <NavBar /> */}
      {/* <ParentsSendMoneyForm /> */}
      {/* <Login /> */}
      {/* <ChildrensVisualSettings /> */}
      {/* <ParentsApprovalList /> */}
      {/* <ParentsDashboard /> */}
      <ChildrensDashboard />
      {/* < ChildrensRequestForm /> */}
    </div>
  );
}

export default App;
