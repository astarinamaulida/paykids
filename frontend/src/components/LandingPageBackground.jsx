import "../App.css";
import Button from "muicss/lib/react/button";

export default function LandingPageBackground(props) {
  return (
    <>
      <div className="landingpage"></div>
      <Button  className="button-kids-login"> <a href="/childrenslogin">kids login</a></Button>
      <Button  className="button-parents-login"><a href="/childrenslogin">kids login</a></Button>
    </>
  );
}