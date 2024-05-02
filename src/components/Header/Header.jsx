import reactLogo from "../../assets/react-logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <img src={reactLogo} alt="React logo" className="logo" />
        <h3 className="title">ReactFacts</h3>
        <h4 className="subtitle">React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Header;
