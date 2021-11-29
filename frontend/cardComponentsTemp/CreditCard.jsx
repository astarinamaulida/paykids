import React, { useState } from 'react';


export default function CreditCard(props) {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bank, setBank] = useState('');
  const [creditCardCompany, setCreditCardCompany] = useState('')
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState(10);
  const [expirationYear, setExpirationYear] = useState(22);
  const [CVV, setCVV] = useState(111);

  const [sitePreferences, setSitePreferences] = useState({})
  return (
    <div>
      <div className="row">
        <div className="small-5 small-offset-1 columns ">
          <div className="callout credit">
            <div className="row">
              <div className="column">
                <p className="credit__card-number">{this.state.number}</p>
                <span className="credit__ccv">{this.state.ccv}</span>
              </div>
              <div className="small-9 columns">
                <label>Card Holder
                  <p className="credit__name">{this.state.name}</p>
                </label>
              </div>
              <div className="small-3 columns">
                <label>Expires
                  <p className="credit__date">{this.state.month} / {this.state.day}</p>
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
 