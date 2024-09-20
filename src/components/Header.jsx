import { Link, useNavigate } from "react-router-dom";

const Header = ({ setFilter, setSortBy }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setFilter("All");
    setSortBy("default");
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
