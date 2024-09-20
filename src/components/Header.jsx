import { Link, useNavigate } from "react-router-dom";

const Header = ({ setFilter }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setFilter("All");
    navigate("/");
  };

  return (
    <div className="header-container">
      <h1
        className="header"
        style={{ cursor: "pointer" }}
        onClick={handleHomeClick}
      >
        The <br /> Article App
      </h1>
      <nav onClick={handleHomeClick} className="home-link">
        Home
      </nav>
    </div>
  );
};

export default Header;
