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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css" />
        <div>
          <Button onClick={ccDesignTwo} className="Button">White</Button>
          <Button onClick={ccDesignThree} className="Button">Pink</Button>
          <Button onClick={ccDesignFour} className="Button">Red</Button>
          <Button onClick={ccDesignFive} className="Button">green</Button>
          <Button onClick={ccDesignSix} className="Button">Orange</Button>
          <Button onClick={ccMainDesign} className="Button">Default</Button>
        </div>
        {/* this is a form need event prvent default */}
        <Button className="Button">Cofirm</Button>
    </div>
  )
}