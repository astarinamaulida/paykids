import { useState } from "react"
import { Button } from '@mui/material';
// import Button from 'muicss/lib/react/button';

export default function ChildrensVisualSettings(props) {
  const [cardBackground, setCardBackground] = useState("ccMainDesign");

  const CC_DESIGN_2 = "https://i.ibb.co/BVLD4x7/cc-design2.png";
  const CC_DESIGN_3 = "https://i.ibb.co/9HZTs4B/cc-design3.png";
  const CC_DESIGN_4 = "https://i.ibb.co/16G1vHQ/cc-design4.png";
  const CC_DESIGN_5 = "https://i.ibb.co/16G1vHQ/cc-design5.png";
  const CC_DESIGN_6 = "https://i.ibb.co/16G1vHQ/cc-design6.png";
  const CC_DESIGN_MAIN = "https://i.ibb.co/bRxw8RD/kids-1.png";

  const ccDesignTwo = function() {
    setCardBackground(CC_DESIGN_2);
  }
  const ccDesignThree = function() {
    setCardBackground(CC_DESIGN_3);
  }
  const ccDesignFour = function() {
    setCardBackground(CC_DESIGN_4);
  }
  const ccDesignFive = function() {
    setCardBackground(CC_DESIGN_5);
  }
  const ccDesignSix = function() {
    setCardBackground(CC_DESIGN_6);
  }
  const ccMainDesign = function() {
    setCardBackground(CC_DESIGN_MAIN);
  }
 
  
  
  return (
    <div className="container">
      <div className="frame-card-selection">
      <h1>I am ChildrensVisualSettings</h1>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css" />
        <Button onClick={ccMainDesign} className="cc-main-design">Default</Button>
        <div class="gallery-item">
          <Button onClick={ccDesignTwo} className="cc-design2">White</Button>
          <Button onClick={ccDesignThree} className="cc-design3">Pink</Button>
          <Button onClick={ccDesignFour} className="cc-design4">Red</Button>
          <Button onClick={ccDesignFive} className="cc-design5">green</Button>
          <Button onClick={ccDesignSix} className="cc-design6">Orange</Button>
          <Button onClick={ccMainDesign} className="cc-main-design">Default</Button>
        </div>
        {/* this is a form need event prvent default */}
        <Button className="Button">Cofirm</Button>
        </div>
    </div>
  )
}