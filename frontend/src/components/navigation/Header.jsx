import "../../styles/navigation/Header.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PiBooks } from "react-icons/pi";
import StateContext from "../../context/StateContext";

const Header = () => {
  const state = useContext(StateContext);
  const pageTitle = state.pageTitle;

  return (
    <header className="app-header">
      <span className="page-title">{pageTitle}</span>
      <span className="app-name">
        <Link to='/books' className="header-button">
          <PiBooks className="header-icon" />
        </Link>
      </span>
    </header>
  );
}

export default Header;