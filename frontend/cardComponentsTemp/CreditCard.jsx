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
    <></>
  )
}
 