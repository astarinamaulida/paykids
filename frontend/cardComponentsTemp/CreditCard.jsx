import React, { useState } from 'react';


export default function CreditCard(props) {
 
  const [firstName, setFirstName] = useState('Tina');
  const [lastName, setLastName] = useState('Toaster');
  const [cardNumber, setCardNumber] = useState('1234 5678 9012 abcd');
  const [expirationMonth, setExpirationMonth] = useState(10);
  const [expirationYear, setExpirationYear] = useState(22);
  const [CVV, setCVV] = useState(111);

  const fname = function() {
    setFirstName();
  }
  const lname = function() {
    setLastName();
  }
  const cardNum = function() {
    setCardNumber();
  }
  const expMonth = function() {
    setExpirationMonth();
  }
  const expYear = function() {
    setExpirationYear();
  }
  setExpirationYear();
  
  const numCCV = function() {
    setCVV();
  }

  

  return (
    <div>
      <div className="row">
        <div className="small-5 small-offset-1 columns ">
          <div className="callout credit">
            <div className="row">
              <div className="column">
                <p className="credit__card-number">{cardNum}</p>
                <span className="credit__ccv">{numCCV}</span>
              </div>
              <div className="small-9 columns">
                <label>Card Holder
                  <p className="credit__name">{fname}</p>
                </label>
              </div>
              <div className="small-3 columns">
                <label>Expires
                  <p className="credit__date">{expMonth} / {expYear}</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="small-5 columns end">
          <div className="callout margin-top50">
            <label>Name
              <input type="text" onChange={this.nameChange.bind(this)}/>
            </label>
            <label>Credit Card Number
              <input type="text" maxLength="16" onChange={this.numberChange.bind(this)}/>
            </label>
            <div className="row">
              <label className="column">Expiry  Date (MM YY)</label>
              <div className="small-4 columns">
                <input type="text" maxLength="2" onChange={this.monthChange.bind(this)} />
              </div>
              <div className="small-4 columns end">
                <input type="text" maxLength="2" onChange={this.dayChange.bind(this)}/>
              </div>
            </div>
            <div className="row">
              <div className="small-4 column">
                <label>CCV
                  <input type="text" maxLength="3" onChange={this.ccvChange.bind(this)} />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 