import logo from './logo.svg';
import './App.css';
import ChildrensTransactionList from './components/ChildrensTransactionList';
import ChildrensRequestList from './components/ChildrensRequestList';
import ParentsApprovalList from './components/ParentsApprovaIList';
import NavBar from './components/NavBar';
import ParentsChildrenListItem from './components/ParentsChildrenListItem';
import ParentsChildrenList from './components/ParentsChidlrenList';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>This is App</h1>
      {/* <ChildrensTransactionList /> */}
      {/* <ChildrensRequestList /> */}
      {/* <ParentsApprovalList /> */}
       <ParentsChildrenList />
    </div>
  );
}

export default App;
