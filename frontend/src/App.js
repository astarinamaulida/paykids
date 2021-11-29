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


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>This is App</h1>
      <ChildrensTransactionList />
      <ChildrensRequestList />
      {/* <ParentsApprovalList /> */}
      <ParentsChildrenList />
      <ParentsDashboard />
      <ChildrensDashboard />
    </div>
  );
}

export default App;
