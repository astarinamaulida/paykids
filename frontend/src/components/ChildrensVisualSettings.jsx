import { useState } from "react";
import Button from 'muicss/lib/react/button';

export default function ChildrensVisualSettings(props) {
  const [cardBackground, setCardBackground] = useState("https://i.ibb.co/bRxw8RD/kids-1.png");

  const cc_main_design = "https://i.ibb.co/bRxw8RD/kids-1.png";
  const cc_design2 = "https://i.ibb.co/BVLD4x7/cc-design2.png";
  const cc_design3 = "https://i.ibb.co/9HZTs4B/cc-design3.png";
  const cc_design4 = "https://i.ibb.co/16G1vHQ/cc-design4.png";
  const cc_design5 = "https://i.ibb.co/8DrWzNB/cc-design5.png";
  const cc_design6 = "https://i.ibb.co/tD9LbWb/cc-design6.png";

  const CC_DESIGN_2 = "https://i.ibb.co/BVLD4x7/cc-design2.png";
  const CC_DESIGN_3 = "https://i.ibb.co/9HZTs4B/cc-design3.png";
  const CC_DESIGN_4 = "https://i.ibb.co/16G1vHQ/cc-design4.png";
  const CC_DESIGN_5 = "https://i.ibb.co/8DrWzNB/cc-design5.png";
  const CC_DESIGN_6 = "https://i.ibb.co/tD9LbWb/cc-design6.png";
  const CC_DESIGN_MAIN = "https://i.ibb.co/bRxw8RD/kids-1.png";

  const ccDesignTwo = function () {
    setCardBackground(CC_DESIGN_2);
  };
  const ccDesignThree = function () {
    setCardBackground(CC_DESIGN_3);
  };
  const ccDesignFour = function () {
    setCardBackground(CC_DESIGN_4);
  };
  const ccDesignFive = function () {
    setCardBackground(CC_DESIGN_5);
  };
  const ccDesignSix = function () {
    setCardBackground(CC_DESIGN_6);
  };
  const ccMainDesign = function () {
    setCardBackground(CC_DESIGN_MAIN);
  };

  return (
    <main className="container">
      <div className="frame-card-selection">
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"
        />
          <div class="gallery-item">
            <img className="cc-main-design" src={cardBackground} />
          </div>
          <div class="gallery-item">
            <img onClick={ccMainDesign} className="cc-main-design" src={cc_main_design} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignTwo}  className="cc-design2" src={cc_design2} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignThree} className="cc-design3" src={cc_design3} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignFour} className="cc-design4" src={cc_design4} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignFive} className="cc-design5" src={cc_design5} />
          </div>
          <div class="gallery-item">
            <img onClick={ccDesignSix} className="cc-design6" src={cc_design6} />
          </div>
          <div>
          <Button className="button-select">Select Card</Button>
        </div>
        
      </div>
    </main>
  );
}
