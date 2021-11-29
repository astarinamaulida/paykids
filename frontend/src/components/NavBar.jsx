import Button from "muicss/lib/react/button";

export default function NavBar(props) {
  const logo = "https://i.ibb.co/vByHTtJ/logo-blue.png";

  return (
    <nav>
      <img className="nav__logo" src={logo} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"
      />
      <div>
        <Button primary className="button-logout">
          Logout
        </Button>
      </div>
    </nav>
  );
}
