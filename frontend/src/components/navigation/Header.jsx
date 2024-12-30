import "../../styles/navigation/Header.scss";
import { Link } from 'react-router-dom';

const Header = ({ pageTitle }) => {
  return (
    <header className="app-header">
      <span className="app-name">
        <Link to='/books' className="header-link">Victoria Book Box</Link>
      </span>
      <span className="page-title">{pageTitle}</span>
    </header>
  );
}

export default Header;