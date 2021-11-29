import { useState } from "react"
import Button from 'muicss/lib/react/button';

export default function ChildrensVisualSettings(props) {
  const [cardBackground, setCardBackground] = useState("ccMainDesign");
  
  const CC_DESIGN_2 = "";
  const CC_DESIGN_3 = "";
  const CC_DESIGN_4 = "";
  const CC_DESIGN_5 = "";
  const CC_DESIGN_6 = "";
  const CC_DESIGN_MAIN = "";

  const ccDesignTwo = function() {
    setCardBackground(CC_DESIGN_2)
  }
  const ccDesignThree = function() {
    setCardBackground(CC_DESIGN_3)
  }
  const ccDesignFour = function() {
    setCardBackground(CC_DESIGN_4)
  }
  const ccDesignFive = function() {
    setCardBackground(CC_DESIGN_5)
  }
  const ccDesignSix = function() {
    setCardBackground(CC_DESIGN_6 )
  }
  const ccMainDesign = function() {
    setCardBackground(CC_DESIGN_MAIN)
  }
 
  
  
  return (
    <div>
      <h1>I am ChildrensVisualSettings</h1>
    </div>
  )
}