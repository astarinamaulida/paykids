import { useState } from "react"

export default function ParentsSendMoneyForm(props) {
  const [sendMoney, setSendMoney] = useState(0);

  const five = function() {
    setSendMoney(sendMoney = 5)
  }
  const ten = function() {
    setSendMoney(sendMoney = 10)
  }
  const fifteen = function() {
    setSendMoney(sendMoney = 15)
  }
  const twenty = function() {
    setSendMoney(sendMoney = 20)
  }
  const fifty = function() {
    setSendMoney(sendMoney = 50)
  }
  const hundred = function() {
    setSendMoney(sendMoney = 100)
  }
  



  return (
    <div>
      <h1>I am ParentsSendMoneyForm</h1>
    </div>
  )
}