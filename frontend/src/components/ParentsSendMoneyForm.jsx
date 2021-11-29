import { useState } from "react"

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
    </div>
  )
}