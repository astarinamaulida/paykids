import logo from './logo.svg';
import './App.css';
import ChildrensTransactionList from './components/ChildrensTransactionList';
import ChildrensRequestList from './components/ChildrensRequestList';
import ParentsApprovalList from './components/ParentsApprovaIList';
import NavBar from './components/NavBar';
import ParentsChildrenListItem from './components/ParentsChildrenListItem';
import ParentsChildrenList from './components/ParentsChidlrenList';
import ParentsDashboard from './components/ParentsDashboard';
import ChildrensDashboard from './components/ChildrensDashboard';
import ParentsSendMoneyForm from './components/ParentsSendMoneyForm';
import ChildrensVisualSettings from './components/ChildrensVisualSettings';
import ChildrensTransactionListItem from './components/ChildrensTransactionListItem';
import Login from './components/ChildrensLogin';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ParentsSendMoneyForm /> */}
      {/* <Login /> */}
      {/* <ChildrensVisualSettings /> */}
      {/* <ChildrensRequestList /> */}
      {/* <ParentsApprovalList />
      <ParentsChildrenList />
      <ParentsDashboard />*/}
      {/* <ChildrensDashboard /> */}
      <ChildrensTransactionList />

    </div>
  );
}

export default App;
