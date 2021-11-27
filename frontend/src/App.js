import logo from './logo.svg';
import './App.css';
import ChildrensTransactionList from './components/ChildrensTransactionList';
import ChildrensRequestList from './components/ChildrensRequestList';


function App() {
  return (
    <div className="App">
      <h1>Transaction List</h1>
      {/* <ChildrensTransactionList /> */}
      <ChildrensRequestList />
    </div>
  );
}

export default App;
