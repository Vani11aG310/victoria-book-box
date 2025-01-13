import "../../styles/navigation/Header.scss";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StateContext from "../../context/StateContext";
import logo from '../../logo/logo.png';

const Header = () => {
  const state = useContext(StateContext);
  const pageTitle = state.pageTitle;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname.toLowerCase() === '/wishlists') {
      navigate("/login");
    }
  };
  
  return (
    <header className="app-header">
      <span className="app-name">
        <Link to='/books' className="header-button">
          <img src={logo} alt="Logo" className="header-icon" />
        </Link>
      </span>
      <span className="page-title" onClick={handleClick} >{pageTitle} </span>
    </header>
  );
}

export default Header;