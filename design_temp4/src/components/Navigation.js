import React from 'react'; //optional
import Button from 'muicss/lib/react/button';

function Navigation(){
  const logo = "https://i.ibb.co/vByHTtJ/logo-blue.png"

  return (
    <nav>
    <span className="nav-logo"></span>
     <img className="nav__image" src={logo}/>

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css" />
        <div>
          <Button primary className="Button">Logout</Button>
        </div>
  </nav>
  );
}

export default Navigation;
