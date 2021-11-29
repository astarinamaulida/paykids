import { useState } from "react"
import Button from 'muicss/lib/react/button';

export default function ParentsSendMoneyForm(props) {
  const [sendMoney, setSendMoney] = useState(0);

  const five = function() {
    setSendMoney(5)
  }
  const ten = function() {
    setSendMoney(10)
  }
  const fifteen = function() {
    setSendMoney(15)
  }
  const twenty = function() {
    setSendMoney(20)
  }
  const fifty = function() {
    setSendMoney(50)
  }
  const hundred = function() {
    setSendMoney(100)
  }
  const clear = function() {
    setSendMoney(0)
  }

  return (
    <div>
      <h1>I am ParentsSendMoneyForm</h1>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css" />
        <div>
          <Button onClick={five} className="Button">$5</Button>
          <Button onClick={ten} className="Button">$10</Button>
          <Button onClick={fifteen} className="Button">$15</Button>
          <Button onClick={twenty} className="Button">$20</Button>
          <Button onClick={fifty} className="Button">$50</Button>
          <Button onClick={hundred} className="Button">$100</Button>
        </div>
        {/* this is a form need event prvent default */}
        <Button className="Button">Cofirm</Button>
        <Button onClick={clear} className="Button">Reset</Button>
    </div>
  )
}