import { useState } from "react";
import Button from 'muicss/lib/react/button';
import { purple } from '@mui/material/colors';
// import "/components/Button.scss"

export default function PageStyling(props) {
  const WHITE = "transparent";
  const BLUE = "#7B9ED8";
  const PURPLE = "#E1BEE7";
  const PINK = "#F8BBD0";
  const GREEN = "rgb(139, 195, 74)";
  const ORANGE = "#FF9979";
  const DEFAULT = "";

  const WHITE_BUTTON = "white";
  const BLUE_BUTTON = "#7B9ED8";
  const PURPLE_BUTTON = "#E1BEE7";
  const PINK_BUTTON = "#F8BBD0";
  const GREEN_BUTTON = "rgb(139, 195, 74)";
  const ORANGE_BUTTON = "#FF9979";
  const DEFAULT_COLOR_BUTTON = "";
  
  const WHITE_FONT = "white";
  const BLUE_FONT = "#7B9ED8";
  const PURPLE_FONT = "#E1BEE7";
  const PINK_FONT = "#F8BBD0";
  const GREEN_FONT= "rgb(139, 195, 74)";
  const ORANGE_FONT = "#FF9979";
  const DEFAULT_COLOR_FONT = "";
  
  const WHITE_BACKGROUND = "white";
  const BLUE_BACKGROUND = "#7B9ED8";
  const PURPLE_BACKGROUND = "#E1BEE7";
  const PINK_BACKGROUND = "#F8BBD0";
  const GREEN_BACKGROUND = "rgb(139, 195, 74)";
  const ORANGE_BACKGROUND = "#FF9979";
  const DEFAULT_COLOR_BACKGROUND = "";

  const WHITE_LOGO = "https://i.ibb.co/vByHTtJ/logo-blue.png";
  const BLUE_LOGO = "https://i.ibb.co/vByHTtJ/logo-blue.png"; 
  const PURPLE_LOGO = "https://i.ibb.co/g9C60FW/Yellow-and-Orange-Square-Retail-Logo.png"
  const PINK_LOGO = "https://i.ibb.co/BPXppjf/4.png";
  const GREEN_LOGO = "https://i.ibb.co/fkB0X83/5.png";
  const ORANGE_LOGO = "https://i.ibb.co/J7SPJr8/6.png";
  const DEFAULT_LOGO = "https://i.ibb.co/vByHTtJ/logo-blue.png";

  const [color, setColor] = useState("gold");
  const [fontColor, setFontColor] = useState("black");
  const [settingsFrame, setSettingsFrame] = useState("white");
  const [bodyBackground, setBodyBackground] = useState(WHITE);
  const [logo, setLogo] = useState(BLUE_LOGO);

  

  const white = function () {
    setColor("white");
    setFontColor("black");
    setSettingsFrame("white");
    setBodyBackground(WHITE);
    setLogo(WHITE_LOGO);
  };
  const blue = function () {
    setColor("blue");
    setFontColor("white");
    setSettingsFrame("#7B9ED8");
    setBodyBackground(BLUE);
    setLogo(BLUE_LOGO);
  };
  const purple = function () {
    setColor("purple");
    setFontColor("white");
    setSettingsFrame(PURPLE);
    setBodyBackground(PURPLE);
    setLogo(PURPLE_LOGO);
  };
  const pink = function () {
    setColor("pink");
    setFontColor("white");
    setSettingsFrame("#F8BBD0");
    setBodyBackground(PINK);
    setLogo(PINK_LOGO);
  };
  const green = function () {
    setColor("green");
    setFontColor("white");
    setSettingsFrame(GREEN);
    setBodyBackground(GREEN);
    setLogo(GREEN_LOGO);
  };
  const orange = function () {
    setColor("orange");
    setFontColor("white");
    setSettingsFrame("#FF9979");  
    setBodyBackground(ORANGE);
    setLogo(ORANGE_LOGO);
  };  
  // set default colours here
  const clear = function () {
    setColor("white");
    setFontColor("black");
    setSettingsFrame("white");
    setBodyBackground(WHITE);
    setLogo(BLUE_LOGO);
  };

  return (

    <div style={{backgroundColor: bodyBackground}} className="App">
      <header>
        {/* <img className="nav__logo" src="https://i.ibb.co/vByHTtJ/logo-blue.png"/> */}
        <img className="nav__logo" src={logo}/>
        
      </header>
    <main className="container">
      <article style={{background: color}} className="frame-send-money">
        <div className="text">
          <p>Send Money: Tina</p>
        </div>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"/>
          <div>
            <Button onClick={white} className="button-money">white</Button>
            <Button onClick={blue} className="button-money">blue</Button>
            <Button onClick={purple} className="button-money">purple</Button>
          </div>
          <div>
            <Button onClick={pink} className="button-money">pink</Button>
            <Button onClick={green} className="button-money">green</Button>
            <Button onClick={orange} className="button-money2">orange</Button>
          </div>
          <p>Amount to give: {color}</p>
          {/* this is a form need event prvent default */}
          <div>
            <Button style={{background: color, color: fontColor}} className="button-confirm">Confirm</Button>
            <Button onClick={clear} className="button-cancel">Reset</Button>
          </div>
        </div>
      </article>
    </main>
    </div>
  );
}
