import logo from './logo.svg';
import './App.css';
import ChildrensTransactionList from './components/ChildrensTransactionList';
import ChildrensRequestList from './components/ChildrensRequestList';
import ParentsApprovalList from './components/ParentsApprovaIList';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>This is App</h1>
      <ChildrensTransactionList />
      {/* <ChildrensRequestList /> */}
      {/* <ParentsApprovalList /> */}
    </div>
  );
}

export default App;
