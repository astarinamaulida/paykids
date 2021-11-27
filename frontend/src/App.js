import logo from './logo.svg';
import './App.css';
import ChildrensTransactionList from './components/ChildrensTransactionList';
import ChildrensRequestList from './components/ChildrensRequestList';
import ParentsApprovalList from './components/ParentsApprovaIList';


function App() {
  return (
    <div className="App">
      <h1>Transaction List</h1>
      {/* <ChildrensTransactionList /> */}
      {/* <ChildrensRequestList /> */}
      <ParentsApprovalList />
    </div>
  );
}

export default App;
