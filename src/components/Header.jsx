import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <h1 className="header">
          The <br /> Article App
        </h1>
      </Link>
      <Link to={"/"} className="home-link">
        <nav> Home </nav>
      </Link>
    </div>
  );
};

export default Header;
