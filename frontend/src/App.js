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
import ChildrensLogin from "./components/ChildrensLogin";
import CreditCard from "./components/CreditCard";
import ChildrensRequestForm from "./components/ChildrensRequestForm";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react';


function App() {
  const [currentChild, setCurrentChild] = useState(null);
  const [currentParent, setCurrentParent] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <header>
        <div className="landingpage"></div>
        <Button className="button-kids-login"><Link to="/childrenslogin">kids login</Link> </Button>
        <Button className="button-parents-login"><Link to="/childrenslogin">parents login</Link> </Button>

          {/* <nav> */}
          {/* <img className="nav__logo" src="https://i.ibb.co/vByHTtJ/logo-blue.png"/> */}
          <div>
        {/* <Button primary className="button-logout">
          Logout
        </Button> */}
      </div>
          {/* {!currentChild && !currentParent && <Button primary className="button-login"><Link to="/childrenslogin">Childrens Login</Link> </Button> }
          {currentChild && !currentParent && <Button primary className="button-dashboard"><Link to="/childrensdashboard">Childrens Dashboard</Link></Button> }
          {currentChild && !currentParent && <Button primary className="button-settings"><Link to="/childrenssettings">Settings</Link></Button> }
         {!currentChild && <Button primary className="button-login"><Link to="/childrenslogin">Childrens Login</Link></Button> } */}
          {!currentChild &&  <Button primary className="button-login"><Link to="/childrenslogin">Childrens Login</Link> </Button> }
          {currentChild &&  <Button primary className="button-dashboard"><Link to="/childrensdashboard">Childrens Dashboard</Link></Button> }
          {currentChild && <Button primary className="button-settings"><Link to="/childrenssettings">Settings</Link></Button> }
         {!currentChild && <Button primary className="button-login"><Link to="/childrenslogin">Childrens Login</Link></Button> }
          <Link to="/childrensdashboard">Childrens Dashboard</Link>
          <Link to="/childrenssettings">Settings</Link>
          {/* </nav> */}
        </header>
        {!currentChild && !currentParent &&(
          <button onClick={() => setCurrentChild({name: "Tina"})}>Login Child</button>
        )}
        {currentChild && <ChildrensDashboard />}
        {currentChild && !currentParent && (
          <button onClick={() => ( setCurrentChild(null))  }>Logout Child</button>
        )}
        <Routes>
          <Route path="/childrenslogin" element={<ChildrensLogin />} />
          <Route path="/childrensdashboard" element={<ChildrensDashboard />} />
          <Route path="/childrenssettings" element={<ChildrensVisualSettings />} />
        </Routes>

      {/* <ParentsSendMoneyForm /> */}
      {/* <Login /> */}
      {/* <ChildrensVisualSettings /> */}
      {/* <ParentsApprovalList /> */}
      {/* <ParentsDashboard /> */}
      {/* <ChildrensDashboard /> */}
      {/* < ChildrensRequestForm /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
