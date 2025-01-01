import "../../styles/navigation/Header.scss";
import { Link, useLocation } from 'react-router-dom';

const Header = ({ pageTitle }) => {
  const location = useLocation();
  console.log("lOCATION***", location);


  return (
    <header className="app-header">
      <span className="page-title">{pageTitle}</span>
      <span className="app-name">
        <Link to='/books' className="header-link">Logo Here</Link>
      </span>
    </header>
  );
}

export default Header;