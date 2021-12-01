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

       
          {/* <img className="nav__logo" src="https://i.ibb.co/vByHTtJ/logo-blue.png"/> */}
          <div>
          </div>
          {/* <img className="nav__logo" src="https://i.ibb.co/vByHTtJ/logo-blue.png"/>
            <div>
              {!currentChild && <Button  onClick={() => setCurrentChild({name: "Tina"})} primary className="button-login"><Link to="/childrensdashboard">Login</Link></Button> }
              {currentChild &&  <Button  primary className="button-dashboard"><Link to="/childrensdashboard">Childrens Dashboard</Link></Button> }
              {currentChild &&  <Button  primary className="button-settings"><Link to="/childrenssettings">Settings</Link></Button> }
              {currentChild &&  <Button  primary className="button-settings"><Link to="/requestform">Request</Link></Button> }
              {currentChild &&  <Button  onClick={() => setCurrentChild(null)} primary className="button-login"><Link to="/childrenslogin">Logout</Link></Button> }
            </div> */}
         
        </header>
        
       
        {currentChild && (
          <Routes>
            <Route path="/childrensdashboard" element={<ChildrensDashboard />} />
            <Route path="/childrenssettings"  element={<ChildrensVisualSettings />} />
            <Route path="/requestform"        element={<ChildrensRequestForm />} />
          </Routes>
        )}
        {!currentChild && (
          <Routes>
            <Route path="/childrenslogin"     element={<ChildrensLogin />} />
          </Routes>
         )}
   
      {/* <Login /> */}

       {/* < ChildrensRequestForm /> */}
      {/* <ChildrensVisualSettings /> */}
       {/* <ChildrensDashboard /> */}

      {/* <ParentsApprovalList /> */}
      {/* <ParentsDashboard /> */}
      {/* <ParentsSendMoneyForm /> */}
     
     
      </div>
    </BrowserRouter>
  );
}

export default App;

