import "../../styles/notification/NotificationItem.scss";
import { FaCircleInfo, FaXmark } from "react-icons/fa6";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
import { useNavigate } from "react-router-dom";

const NotificationItem = (props) => {
  const { notification, setNotifications } = props;
  const state = useContext(StateContext);
  const navigate = useNavigate();

  // Delete the Notification.
  const handleClose = () => {
    setNotifications((prev) => prev.filter((x) => x.id !== notification.id));
  }

  // Navigate to the Book Box page.
  const handleClick = () => {
    const bookBoxId = notification.collection.book_box_id
    const bookBox = state.bookBoxes.find((bookBox) => bookBox.id === bookBoxId);

    const path = `/book-boxes/${bookBox.id}`;
    navigate(path, { state: { bookBox } });
  }

  return (
    <div className="notification__item">
      <div className="notification__info">
        <FaCircleInfo className="notification__info-icon" />
      </div>
      <div className="notification__message-info" onClick={handleClick}>
        <p className="notification__message">{notification.message}</p>
      </div>
      <div className="notification__close-button">
        <FaXmark className="notification__close-icon" onClick={handleClose} />
      </div>
    </div>
  );
}

export default NotificationItem;