import "../../styles/navigation/Footer.scss";
import { FaBook, FaBox, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer">
      <Link to='/books' className="footer-button">
        <FaBook className="footer-icon" />
        <span>Books</span>
      </Link>
      <Link to='/book-boxes' className="footer-button">
        <FaBox className="footer-icon" />
        <span>Boxes</span>
      </Link>
      <Link to='/wishlist' className="footer-button">
        <FaHeart className="footer-icon" />
        <span>Wishlist</span>
      </Link>
    </footer>
  );
}

export default Footer;